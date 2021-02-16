import React from 'react';
import { action } from '@storybook/addon-actions';

import AuthSocialLoginButtons from '.';

export default {
  title: 'Components/Auth/SocialLoginButtons',
  component: AuthSocialLoginButtons,
};

export const Basic = () => <AuthSocialLoginButtons onBtnClick={action('onBtnClick')} />;
