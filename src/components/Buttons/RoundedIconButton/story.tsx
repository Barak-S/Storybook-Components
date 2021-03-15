import { Story } from '@storybook/react';
import React from 'react';
import { StoryMeta } from 'styles';

import RoundedIconButton, { RoundedIconButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Buttons/RoundedIconButton',
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

export const Basic: Story<Props> = props => <RoundedIconButton {...props} />;

export const Disabled: Story<Props> = props => <RoundedIconButton {...props} disabled />;

Disabled.parameters = {
  docs: {
    storyDescription: 'Unactive state',
  },
};
