import React from 'react';
import { action } from '@storybook/addon-actions';

import AuthSocialLoginButtons, { AuthSocialLoginButtonsProps } from '.';
import { View } from 'components/Common';
import { StoryConf, StoryFC } from 'styles';

const conf: StoryConf<AuthSocialLoginButtonsProps> = {
  title: 'Components/Auth/SocialLoginButtons',
  component: AuthSocialLoginButtons,
};

export const Basic: StoryFC<AuthSocialLoginButtonsProps> = props => {
  return (
    <View style={{ width: 650 }}>
      <AuthSocialLoginButtons onBtnClick={action('onBtnClick')} {...props} />
    </View>
  );
};

export default conf;
