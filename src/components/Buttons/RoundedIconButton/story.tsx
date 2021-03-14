import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import { View } from 'components/Common';
import React from 'react';
import { StoryMeta } from 'styles';

import RoundedIconButton, { RoundedIconButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Buttons/RoundedIconButton',
  component: RoundedIconButton,
  args: {
    icon: 'times',
    onClick: action('onClick'),
  },
  parameters: {
    layout: 'fullscreen',
  },
}))();

export const Basic: Story<Props> = props => (
  <View column style={{ width: 200 }}>
    <RoundedIconButton {...props} />
  </View>
);

export const Disabled: Story<Props> = props => (
  <View column style={{ width: 200 }}>
    <RoundedIconButton {...props} disabled />
  </View>
);

Disabled.parameters = {
  docs: {
    storyDescription: 'Unactive buttons',
  },
};
