import React from 'react';
import { colors } from 'styles';
import { Story, StoryMeta } from 'utils';

import ScreenFooter, { ScreenFooterProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Screen/Footer',
  component: ScreenFooter,
  argTypes: {
    theme: {
      control: false,
    },
  },
  parameters: {
    backgrounds: {
      default: 'paleGreyTwo',
      values: [{ name: 'paleGreyTwo', value: colors.paleGreyTwo }],
    },
  },
}))();

export const Light: Story<Props> = args => <ScreenFooter {...args} theme="light" />;

export const Dark: Story<Props> = args => <ScreenFooter {...args} theme="dark" />;
