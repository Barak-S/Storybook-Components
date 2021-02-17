import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import AuthSectionSplitter from '.';

export default {
  title: 'Components/Auth/SectionSplitter',
  component: AuthSectionSplitter,
  decorators: [withKnobs],
};

export const Basic = () => <AuthSectionSplitter>{text('Text', 'Or login with')}</AuthSectionSplitter>;
