import React from 'react';
import { action } from '@storybook/addon-actions';

import SubmitButton from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Buttons/SubmitButton',
  component: SubmitButton,
};

const processing = true;

export const Basic = () => (
  <View column={true} style={{ width: '740px', margin: '0 auto' }}>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <SubmitButton onClick={action('onClick')}>Log In</SubmitButton>
    </View>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <SubmitButton disabled={processing} onClick={action('onClick')}>
        Log In
      </SubmitButton>
    </View>
    <View row style={{ width: '200px', margin: '0 auto 30px' }}>
      <SubmitButton processing={processing} disabled={processing} onClick={action('onClick')}>
        Log In
      </SubmitButton>
    </View>
  </View>
);
