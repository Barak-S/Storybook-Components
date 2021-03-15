import { Story } from '@storybook/react';
import { View } from 'components/Common';
import React from 'react';
import { StoryMeta, Styles } from 'styles';

import SocialButton, { SocialButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Buttons/SocialButton',
  component: SocialButton,
  argTypes: {
    type: {
      control: false,
    },
    onClick: { action: 'onClick' },
  },
  parameters: {
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = props => (
  <View column style={{ width: 200 }}>
    <SocialButton {...props} type="facebook" />
    <SocialButton {...props} style={styles.indent} type="google" />
    <SocialButton {...props} style={styles.indent} type="linkedin" />
  </View>
);

export const Disabled: Story<Props> = props => (
  <View column style={{ width: 200 }}>
    <SocialButton {...props} disabled type="facebook" />
    <SocialButton {...props} style={styles.indent} disabled type="google" />
    <SocialButton {...props} style={styles.indent} disabled type="linkedin" />
  </View>
);

Disabled.parameters = {
  docs: {
    storyDescription: 'Unactive buttons',
  },
};

const styles: Styles = { indent: { marginTop: 10 } };
