import { action } from '@storybook/addon-actions';
import React from 'react';

import FormTextEditor from '.';

export default {
  title: 'components/Forms/TextEditor',
  component: FormTextEditor,
};

export const Default = () => <FormTextEditor onChange={action('onChange')} />;
