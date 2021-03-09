import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import AuthSocialLoginButtons, { AuthSocialLoginButtonsProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Auth/SocialLoginButtons',
  component: AuthSocialLoginButtons,
}))();

export const Basic: StoryFC<Props> = props => {
  return (
    <View style={{ width: 650 }}>
      <AuthSocialLoginButtons onBtnClick={action('onBtnClick')} {...props} />
    </View>
  );
};
