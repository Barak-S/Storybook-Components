import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

import { muiTheme } from '../src/styles';

addDecorator(story => <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>);
