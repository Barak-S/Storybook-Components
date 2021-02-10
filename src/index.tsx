import './index.css';

import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Screens } from 'screens';
import { muiTheme } from 'styles';

ReactDOM.render(
  <ThemeProvider theme={muiTheme}>
    <Screens />
  </ThemeProvider>,
  document.getElementById('app'),
);
