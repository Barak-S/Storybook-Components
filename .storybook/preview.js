import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { addDecorator } from '@storybook/react';
import React from 'react';
import StoryRouter from 'storybook-react-router';

import { muiTheme } from '../src/styles';

// Parametres

export const parameters = {
  viewport: {
    viewports: {
      mobileSM: {
        name: 'Small Mobile (320 x 568)',
        styles: {
          width: '320px',
          height: '568px',
        },
        type: 'mobile',
      },
      mobileMD: {
        name: 'Medium Mobile (375 x 812)',
        styles: {
          width: '375px',
          height: '812px',
        },
        type: 'mobile',
      },
      mobileLG: {
        name: 'Large Mobile (599 x 896)',
        styles: {
          width: '599px',
          height: '896px',
        },
        type: 'mobile',
      },
      tabletSM: {
        name: 'Small Tablet (834 x 600)',
        styles: {
          width: '834px',
          height: '600px',
        },
        type: 'tablet',
      },
      tabletMD: {
        name: 'Medium Tablet (1194 x 834)',
        styles: {
          width: '1194px',
          height: '834px',
        },
        type: 'tablet',
      },
      tabletLG: {
        name: 'Large Tablet (1279 x 720)',
        styles: {
          width: '1279px',
          height: '720px',
        },
        type: 'tablet',
      },
      desktopSM: {
        name: 'Small Desktop (1280 x 720)',
        styles: {
          width: '1280px',
          height: '720px',
        },
        type: 'desktop',
      },
      desktopMD: {
        name: 'Medium Desktop (1366 x 768)',
        styles: {
          width: '1366px',
          height: '768px',
        },
        type: 'desktop',
      },
      desktopLG: {
        name: 'Large Desktop (1920 x 1080)',
        styles: {
          width: '1920px',
          height: '1080px',
        },
        type: 'desktop',
      },
    },
  },
};

// Decorators

addDecorator(story => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>
  </MuiPickersUtilsProvider>
));

addDecorator(StoryRouter());
