import React from 'react';
import { action } from '@storybook/addon-actions';

import SocialButton, { SocialButtonProps as Props } from '.';
import { View } from 'components/Common';
import { StoryConf, StoryFC } from 'styles';

export default ((): StoryConf<Props> => ({
  title: 'components/Buttons/SocialButton',
  component: SocialButton,
  args: {
    onClick: action('onClick'),
  },
}))();

export const Basic: StoryFC<Props> = props => (
  <View column={true} style={{ width: 200 }}>
    <SocialButton style={{ marginBottom: 10 }} type="facebook" {...props} />
    <SocialButton style={{ marginBottom: 10 }} type="google" {...props} />
    <SocialButton type="linkedin" {...props} />
  </View>
);

export const Disabled: StoryFC<Props> = props => (
  <View column={true} style={{ width: 200 }}>
    <SocialButton style={{ marginBottom: 10 }} type="facebook" disabled={true} {...props} />
    <SocialButton style={{ marginBottom: 10 }} disabled={true} type="google" {...props} />
    <SocialButton disabled={true} type="linkedin" {...props} />
  </View>
);
