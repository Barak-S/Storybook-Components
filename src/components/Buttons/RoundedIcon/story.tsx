import { Story } from '@storybook/react';
import React from 'react';
import { StoryMeta } from 'utils';

import RoundedIconButton, { RoundedIconButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Buttons/RoundedIcon',
  component: RoundedIconButton,
  args: {
    icon: 'times',
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
  parameters: {
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = args => <RoundedIconButton {...args} />;

export const Disabled: Story<Props> = args => <RoundedIconButton {...args} disabled />;

Disabled.parameters = {
  docs: {
    storyDescription: 'Unactive state',
  },
};
