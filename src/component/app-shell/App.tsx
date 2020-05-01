import React from 'react';
import './App.scss';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { HomeComponent } from './home/Home';

function App() {
  return (
    // App Shell
    <div className="shell w-screen h-screen flex flex-col items-center lg:flex-row">

      <Router>
        <div className="app-bar w-screen flex flex-row flex-wrap justify-start items-center p-8 shadow-2xl lg:w-auto lg:h-screen lg:flex-col">
          <h1 id="logo" className="text-2xl">Alexandria</h1>
          <NavLink to="/" activeClassName="active-link">
            <ButtonIcon iconName="home" />
          </NavLink>
          <NavLink to="/search" activeClassName="active-link">
            <ButtonIcon iconName="search" />
          </NavLink>
        </div>

        <div className="app container h-screen flex flex-col">
          <TransitionGroup>
            <CSSTransition
              classNames="fade"
              timeout={300}
            >
              <Switch>
                <Route path="/search">
                  <h1>Search</h1>
                </Route>

                <Route exact path="/">
                  <HomeComponent />
                </Route>

                <Route path="*">
                  <div>Not found</div>
                </Route>

              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </Router>

    </div>
  );
}

function ButtonIcon({iconName}: any) {
  return (
    <button className="button-icon rounded-lg p-2">
      <span className="">{iconName}</span>
    </button>
  );
}

export default App;
