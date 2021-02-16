import React from 'react';
import { action } from '@storybook/addon-actions';

import SocialButton from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Buttons/SocialButton',
  component: SocialButton,
};

export const Basic = () => (
  <View column={true} style={{ width: 200 }}>
    <SocialButton style={{ marginBottom: 10 }} type="facebook" onClick={action('onClick')} />
    <SocialButton style={{ marginBottom: 10 }} type="google" onClick={action('onClick')} />
    <SocialButton type="linkedin" onClick={action('onClick')} />
  </View>
);

export const Disabled = () => (
  <View column={true} style={{ width: 200 }}>
    <SocialButton style={{ marginBottom: 10 }} type="facebook" disabled={true} onClick={action('onClick')} />
    <SocialButton style={{ marginBottom: 10 }} disabled={true} type="google" onClick={action('onClick')} />
    <SocialButton disabled={true} type="linkedin" onClick={action('onClick')} />
  </View>
);
