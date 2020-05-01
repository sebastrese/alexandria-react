import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/scss/index.scss';
import App from './component/app-shell/App';
import './assets/style/css/tailwind.generated.css';
import * as serviceWorker from './serviceWorker';

document.documentElement.setAttribute('data-theme', 'light');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
