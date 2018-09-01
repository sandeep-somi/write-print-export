import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import './App.css';

console.log(colors, 'colors');

const theme = createMuiTheme({
  palette: {
    primary: colors.teal,
    secondary: colors.orange
  },
  status: {
    danger: colors.red,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
