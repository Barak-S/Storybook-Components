import { View } from 'components/Common';
import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import SubmitButton, { SubmitButtonProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Buttons/SubmitButton',
  component: SubmitButton,
}))();

export const Basic: StoryFC<Props> = props => (
  <View column={true} style={{ width: '740px', margin: '0 auto' }}>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <SubmitButton {...props}>Log In</SubmitButton>
    </View>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <SubmitButton disabled={true}>Log In</SubmitButton>
    </View>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <SubmitButton processing={true} disabled={true}>
        Log In
      </SubmitButton>
    </View>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <SubmitButton type="plus">Log In</SubmitButton>
    </View>
  </View>
);
