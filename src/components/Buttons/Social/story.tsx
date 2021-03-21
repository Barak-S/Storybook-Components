import { Story } from '@storybook/react';
import { View } from 'components/Common';
import React from 'react';
import { Styles } from 'styles';
import { StoryMeta } from 'utils';

import SocialButton, { SocialButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Buttons/Social',
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

export const Basic: Story<Props> = args => (
  <View column style={{ width: 200 }}>
    <SocialButton {...args} type="facebook" />
    <SocialButton {...args} style={styles.indent} type="google" />
    <SocialButton {...args} style={styles.indent} type="linkedin" />
  </View>
);

export const Disabled: Story<Props> = args => (
  <View column style={{ width: 200 }}>
    <SocialButton {...args} disabled type="facebook" />
    <SocialButton {...args} style={styles.indent} disabled type="google" />
    <SocialButton {...args} style={styles.indent} disabled type="linkedin" />
  </View>
);

Disabled.parameters = {
  docs: {
    storyDescription: 'Unactive buttons',
  },
};

const styles: Styles = { indent: { marginTop: 10 } };
