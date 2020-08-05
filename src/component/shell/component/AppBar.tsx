import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Services
import { PLATFORM_NAME, APPLICATION_VERSION } from "../../../core/config";

// Component dependecies
import { Button, ButtonLink } from "../../../shared/component/Button";
import { SearchBar } from "../../../shared/component/Bar";
import { MockIdentity } from "../../../core/mock";

/**
 * AppBarDesktop exports a app bar for desktop devices.
 * _*Requires Hooks to operate_
 * @param {boolean} props.isMobile Value to either render or destroy the component's DOM
 */
export function AppBarDesktop(props: IDesktopProps) {
  if (!props.isMobile) {
    const width = "264px";
    const customBorderRadius = "24px";

    return (
      <div
        className="appbar desktop hidden flex-col items-center px-8 py-4 shadow-2xl h-full
                overflow-y-auto lg:flex"
        style={{
          borderTopRightRadius: customBorderRadius,
          borderBottomRightRadius: customBorderRadius,
          width: width,
          minWidth: width,
          maxWidth: width,
        }}
      >
        {/** Application name */}
        <div className="flex flex-col my-4">
          <Link to="/" className="self-center flex flex-row items-center">
            <span className="icon text-4xl mr-1">account_balance</span>
            <h1 className="font-bold text-3xl">{PLATFORM_NAME}</h1>
          </Link>
        </div>

        {/** Search input */}
        <SearchBar onHiddenHandler={() => {}} />

        {/** Appbar list */}
        <div className="flex flex-col my-4 w-full h-full">
          {/** Initial content */}
          <div className="flex flex-col my-3">
            <ButtonLink path="/" exact={true} icon="dashboard" input="Home" />
            <ButtonLink
              path="/explore"
              exact={false}
              icon="explore"
              input="Explore"
            />
          </div>

          {/** Personal */}
          <div className="flex flex-col my-3">
            <strong className="uppercase text-xs tracking-wider mb-2">
              Me
            </strong>
            <ButtonLink path="/myProfile" input="My Profile" icon="person" />
            <ButtonLink path="/recent" input="Recent" icon="restore" />
            <ButtonLink
              path="/me/collection"
              input="Collections"
              icon="bookmarks"
            />
            <ButtonLink path="/liked" input="Liked Media" icon="thumb_up" />
            <ButtonLink
              path="/notifications"
              input="Notifications"
              icon="notifications"
            />
          </div>

          {/** Misc */}
          <div className="flex flex-col my-3">
            <strong className="uppercase text-xs tracking-wider mb-2">
              Misc
            </strong>
            <ButtonLink path="/trending" input="Trending" icon="whatshot" />
            <ButtonLink path="/category" input="Category" icon="category" />
          </div>

          <span className="flex-grow" />

          {/** System Footer */}
          <div className="flex flex-col my-3 self-center">
            <div className="self-center w-full">
              <ButtonLink path="/me" exact={true}>
                <span className="mr-2">
                  <img
                    src={MockIdentity.picture}
                    alt={`${MockIdentity}'s profile`}
                  />
                </span>
                {`${MockIdentity.name} ${MockIdentity.givenName}`}
              </ButtonLink>
            </div>
            <div className="flex flex-col w-full break-words mt-4 text-center">
              <span className="text-xs font-medium bg-opacity-10">
                <Link to="/privacy">Privacy policy</Link> ·{" "}
                <Link to="/service" className="mr-1">
                  Terms of service
                </Link>
                · Version {APPLICATION_VERSION}
              </span>
              <span className="text-xs font-bold bg-opacity-10 mt-2">
                {PLATFORM_NAME} &copy; 2020
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

interface IDesktopProps {
  isMobile: boolean;
}

AppBarDesktop.propTypes = {
  isMobile: PropTypes.bool,
};

/**
 * AppBarMobile exports a app bar for mobile devices.
 * _*Requires Hooks to operate_
 * @param {boolean} props.isMobile Value to either render or destroy the component's DOM
 * @param {function} props.toggleSearchHandler Parent's hook state handler
 */
export function AppBarMobile(props: IMobileProps) {
  if (props.isMobile) {
    return (
      <div
        className="appbar mobile flex flex-row justify-center items-center p-1 my-8 rounded-full z-10 fixed bottom-0 self-center max-w-screen-sm
                shadow-2xl  lg:hidden"
      >
        <ButtonLink
          className="stroke-default"
          type="fab"
          path="/"
          exact={true}
          icon="dashboard"
        />
        <Button
          className="stroke-default"
          type="fab"
          action={props.toggleSearchHandler}
        >
          <span className="icon">search</span>
        </Button>
        <ButtonLink
          className="stroke-default"
          type="fab"
          path="/explore"
          exact={true}
          icon="explore"
        />
        <ButtonLink className="stroke-default" type="fab" path="/me">
          <img src={MockIdentity.picture} alt={`${MockIdentity}'s profile`} />
        </ButtonLink>
      </div>
    );
  }

  return null;
}

interface IMobileProps {
  isMobile: boolean;
  toggleSearchHandler: () => void;
}

AppBarMobile.propTypes = {
  isMobile: PropTypes.bool,
  toggleSearchHandler: PropTypes.func,
};
