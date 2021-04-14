import './index.css';

import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'components/Feedback';
import { AuthProvider } from 'core/auth';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';
import { muiTheme } from 'styles';

import App from './app';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <ThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </MuiPickersUtilsProvider>,
  document.getElementById('app'),
);
