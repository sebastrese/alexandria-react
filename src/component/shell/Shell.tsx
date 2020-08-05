import React, { useState, useEffect, Suspense } from "react";
import { Route } from "react-router-dom";

// Styles
import "./Shell.scss";

// Component
import { SearchBar } from "../../shared/component/Bar";
import { AppBarDesktop, AppBarMobile } from "./component/AppBar";
import { Switch } from "react-router-dom";

// Lazy-loaded pages
// TODO: Lazy loading with React lazy breaks layout
// import Home from '../home/Home';
const Home = React.lazy(() => import("../home/Home"));
const Profile = React.lazy(() => import("../profile/Profile"));
const MyProfile = React.lazy(() => import("../myProfile/MyProfile"));
const Discover = React.lazy(() => import('../discover/discover'))
const Notifications = React.lazy(() =>
  import("../notifications/Notifications")
);

/**
 * Shell Application's default shell
 */
function Shell() {
  // Search bar hook
  const [toggleSearch, setToggleSearch] = useState(true);

  // Mobile listener hook
  const [isMobile, setIsMobile] = useState(
    window.innerWidth >= 1024 ? false : true
  );

  useEffect(() => {
    // ComponentDidMount-like
    function handleResize() {
      setIsMobile(window.innerWidth >= 1024 ? false : true);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="flex flex-col h-full w-full lg:flex-row">
      {/** Desktop Appbar */}
      <AppBarDesktop isMobile={isMobile} />

      {/** Mobile Searchbar */}
      <SearchBar
        type="mobile"
        onHiddenHandler={() => setToggleSearch(toggleSearch ? false : true)}
        isHidden={toggleSearch}
      />

      {/** Content - Main Viewport */}
      <Switch>
        <Route path="/events">
          <Test />
        </Route>
        <Route path="/me" exact={true}>
          <Suspense fallback={HomeSkeleton()}>
            <Profile />
          </Suspense>
        </Route>
        <Route path="/myProfile" exact={true}>
          <Suspense fallback={HomeSkeleton()}>
            <MyProfile />
          </Suspense>
        </Route>
        <Route path="/notifications" exact={true}>
          <Suspense fallback={HomeSkeleton()}>
            <Notifications />
          </Suspense>
        </Route>
        <Route exact path="/">
          <Suspense fallback={HomeSkeleton()}>
            <Home />
          </Suspense>
        </Route>
        <Route exact path="/explore">
          <Suspense fallback={HomeSkeleton()}>
            <Discover />
          </Suspense>
        </Route>
      </Switch>

      {/** Mobile Appbar */}
      <AppBarMobile
        isMobile={isMobile}
        toggleSearchHandler={() => setToggleSearch(toggleSearch ? false : true)}
      />
    </div>
  );
}

function HomeSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      Loading...
    </div>
  );
}

function Test() {
  return <div>Events</div>;
}

export default Shell;
