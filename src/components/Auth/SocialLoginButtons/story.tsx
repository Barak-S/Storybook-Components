import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import React from 'react';
import { StoryMeta, Story } from 'styles';

import AuthSocialLoginButtons, { AuthSocialLoginButtonsProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Auth/SocialLoginButtons',
  component: AuthSocialLoginButtons,
}))();

export const Basic: Story<Props> = args => {
  return (
    <View style={{ width: 650 }}>
      <AuthSocialLoginButtons onBtnClick={action('onBtnClick')} {...args} />
    </View>
  );
};
