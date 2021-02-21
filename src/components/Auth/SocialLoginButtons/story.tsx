import React from 'react';
import { action } from '@storybook/addon-actions';

import AuthSocialLoginButtons from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Auth/SocialLoginButtons',
  component: AuthSocialLoginButtons,
};

export const Basic = () => {
  return (
    <View style={{ width: 650 }}>
      <AuthSocialLoginButtons onBtnClick={action('onBtnClick')} />
    </View>
  );
};
