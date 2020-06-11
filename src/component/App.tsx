import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Styles
import './App.scss';

// Components
const Landing = React.lazy(() => import('./landing/Landing'))
const Shell = React.lazy(() => import('./shell/Shell'))

function App() {
  return (
    <Router>
      <div className='h-screen w-full'>
        <Switch>
          <Route path='/' exact>
            <Suspense fallback={Skel()}>
              <Shell />
            </Suspense>
          </Route>
          <Route path='/landing' exact>
            <Suspense fallback={Skel()}>
              <Landing />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Skel() {
  return (
    <div>Loading...</div>
  )
}

export default App
