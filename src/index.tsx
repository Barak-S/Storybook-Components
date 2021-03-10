import './index.css';

import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'components/Feedback';
import { AuthProvider } from 'core/auth';
import React from 'react';
import ReactDOM from 'react-dom';
import { muiTheme } from 'styles';

import App from './app';

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <AuthProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById('app'),
);
