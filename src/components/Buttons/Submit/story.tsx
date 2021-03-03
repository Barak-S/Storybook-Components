import React, { FC } from 'react';

import SubmitButton, { SubmitButtonProps } from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Buttons/SubmitButton',
  component: SubmitButton,
};

export const Basic: FC<Partial<SubmitButtonProps>> = props => (
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
