import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routes from './routes';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
