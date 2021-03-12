import React from 'react';
import { View } from 'components/Common';
import ChooseFileBtn from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/Forms/ChooseFileBtn',
  component: ChooseFileBtn,
};

export const Basic = () => (
  <View>
    <View row>
      <ChooseFileBtn onFileSelect={action('onFileSelect')} />
    </View>
  </View>
);
