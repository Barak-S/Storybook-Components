import { View } from 'components/Common';
import React from 'react';
import { StoryMeta, Story } from 'styles';

import ContainedButton, { ContainedButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Buttons/Contained',
  component: ContainedButton,
}))();

export const Basic: Story<Props> = props => (
  <View column style={{ width: '740px', margin: '0 auto' }}>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <ContainedButton {...props}>{'Log In'}</ContainedButton>
    </View>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <ContainedButton disabled>{'Log In'}</ContainedButton>
    </View>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <ContainedButton processing disabled>
        {'Log In'}
      </ContainedButton>
    </View>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <ContainedButton type="plus">{'Log In'}</ContainedButton>
    </View>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <ContainedButton theme="red" type="plus">
        {'Continue'}
      </ContainedButton>
    </View>
  </View>
);
