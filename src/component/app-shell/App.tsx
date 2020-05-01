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

interface IProps {}
interface IState {
  theme: string;
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
        theme: 'light',
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    const theme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);

    document.documentElement.classList.add('theme-transition');
    document.documentElement.setAttribute('data-theme', theme);
    window.setTimeout(function() {
      document.documentElement.classList.remove('theme-transition')
    }, 1000);
  }

  render() {
    return (
      // App Shell
      <div className="shell w-screen h-screen flex flex-col items-center lg:flex-row">
  
        <Router>
          <div className="app-bar visible w-screen flex flex-row flex-wrap justify-start items-center p-8 shadow-2xl lg:w-auto lg:h-screen lg:flex-col lg:visible">
            <h1 id="logo" className="text-2xl">Alexandria</h1>
            <NavLink to="/" activeClassName="active-link">
              <button className="button-icon rounded-lg p-2">
                <span>home</span>
              </button>
            </NavLink>
            <NavLink to="/search" activeClassName="active-link">
              <button className="button-icon rounded-lg p-2">
                <span>search</span>
              </button>
            </NavLink>
          </div>
  
          <div className="app container w-screen h-screen flex flex-col">
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
}

