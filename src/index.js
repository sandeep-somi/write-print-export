import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';

const theme = createMuiTheme({
  palette: {
    primary: colors.teal,
    secondary: colors.orange
  },
  status: {
    danger: colors.red,
  },
});


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
