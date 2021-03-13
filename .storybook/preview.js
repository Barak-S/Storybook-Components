import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

import { muiTheme } from '../src/styles';

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
console.log(JSON.stringify(MINIMAL_VIEWPORTS));

// Parametres

export const parameters = {
  viewport: {
    viewports: {
      mobileSM: {
        name: 'Small mobile (320 x 568)',
        styles: {
          width: '320px',
          height: '568px',
        },
        type: 'mobile',
      },
      mobileLG: {
        name: 'Large mobile (414 x 896)',
        styles: {
          width: '414px',
          height: '896px',
        },
        type: 'mobile',
      },
      tablet: {
        name: 'Tablet (1112 x 834)',
        styles: {
          height: '1112px',
          width: '834px',
        },
        type: 'tablet',
      },
      desktop: {
        name: 'Desktop (1920 x 1080)',
        styles: {
          height: '1920px',
          width: '1080px',
        },
        type: 'tablet',
      },
    },
  },
};

// Decorators

addDecorator(story => <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>);
