import React from 'react';
import { Story, StoryMeta } from 'utils';

import ScreenFooter, { ScreenFooterProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Screen/ScreenFooter',
  component: ScreenFooter,
}))();

export const Basic: Story<Props> = args => (
  <>
    <ScreenFooter {...args} theme="dark" />
    <ScreenFooter {...args} theme="light" />
  </>
);
