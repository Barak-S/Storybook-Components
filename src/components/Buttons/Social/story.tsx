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
    <SocialButton type="facebook" onClick={action('onClick')} />
    <SocialButton style={{ marginTop: 10 }} type="google" onClick={action('onClick')} />
    <SocialButton style={{ marginTop: 10 }} type="linkedin" onClick={action('onClick')} />
  </View>
);

export const Disabled = () => (
  <View column={true} style={{ width: 200 }}>
    <SocialButton type="facebook" disabled={true} onClick={action('onClick')} />
    <SocialButton style={{ marginTop: 10 }} disabled={true} type="google" onClick={action('onClick')} />
    <SocialButton style={{ marginTop: 10 }} disabled={true} type="linkedin" onClick={action('onClick')} />
  </View>
);
