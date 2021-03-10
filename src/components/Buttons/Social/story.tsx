import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import { View } from 'components/Common';
import React from 'react';
import { StoryMeta } from 'styles';

import SocialButton, { SocialButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Buttons/SocialButton',
  component: SocialButton,
  args: {
    onClick: action('onClick'),
  },
  argTypes: {
    type: {
      control: false,
    },
  },
}))();

export const Basic: Story<Props> = props => (
  <View column={true} style={{ width: 200 }}>
    <SocialButton {...props} style={{ marginBottom: 10 }} type="facebook" />
    <SocialButton {...props} style={{ marginBottom: 10 }} type="google" />
    <SocialButton {...props} type="linkedin" />
  </View>
);

export const Disabled: Story<Props> = props => (
  <View column={true} style={{ width: 200 }}>
    <SocialButton {...props} style={{ marginBottom: 10 }} type="facebook" disabled={true} />
    <SocialButton {...props} style={{ marginBottom: 10 }} disabled={true} type="google" />
    <SocialButton {...props} disabled={true} type="linkedin" />
  </View>
);

Disabled.parameters = {
  docs: {
    storyDescription: 'Unactive buttons',
  },
};
