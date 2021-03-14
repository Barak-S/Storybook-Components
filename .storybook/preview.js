import { ThemeProvider } from '@material-ui/core/styles';
import { addDecorator } from '@storybook/react';
import React from 'react';

import { muiTheme } from '../src/styles';

// Parametres

export const parameters = {
  viewport: {
    viewports: {
      mobileSM: {
        name: 'Mobile SM (320 x 568)',
        styles: {
          width: '320px',
          height: '568px',
        },
        type: 'mobile',
      },
      mobileMD: {
        name: 'Mobile MD (375 x 812)',
        styles: {
          width: '375px',
          height: '812px',
        },
        type: 'mobile',
      },
      mobileLG: {
        name: 'Mobile LG (599 x 896)',
        styles: {
          width: '599px',
          height: '896px',
        },
        type: 'mobile',
      },
      tabletSM: {
        name: 'Tablet SM (600 x 834)',
        styles: {
          height: '600px',
          width: '834px',
        },
        type: 'tablet',
      },
      tabletMD: {
        name: 'Tablet MD (1194 x 834)',
        styles: {
          height: '1194px',
          width: '834px',
        },
        type: 'tablet',
      },
      tabletLG: {
        name: 'Tablet LG (1279 x 720)',
        styles: {
          height: '1279px',
          width: '720px',
        },
        type: 'tablet',
      },
      desktopSM: {
        name: 'Desktop SM (1280 x 720)',
        styles: {
          height: '1280px',
          width: '720px',
        },
        type: 'desktop',
      },
      desktopMD: {
        name: 'Desktop MD (1366 x 768)',
        styles: {
          height: '1366px',
          width: '768px',
        },
        type: 'desktop',
      },
      desktopLG: {
        name: 'Desktop LG (1920 x 1080)',
        styles: {
          height: '1920px',
          width: '1080px',
        },
        type: 'desktop',
      },
    },
  },
};

// Decorators

addDecorator(story => <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>);
