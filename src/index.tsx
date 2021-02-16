import './index.css';

import { ThemeProvider } from '@material-ui/core/styles';
import { initAmplify } from 'core/amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import { Screens } from 'screens';
import { muiTheme } from 'styles';
import { AuthProvider } from 'core/api';

initAmplify();

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <AuthProvider>
      <Screens />
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById('app'),
);
