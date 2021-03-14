import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, StoryMeta } from 'styles';

import FormSelectFileButton, { FormSelectFileButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/SelectFileButton',
  component: FormSelectFileButton,
  args: {
    onFileSelect: action('onFileSelect'),
  },
}))();

export const Basic: Story<Props> = props => <FormSelectFileButton {...props} />;
