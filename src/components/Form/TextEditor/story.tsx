import { action } from '@storybook/addon-actions';
import React from 'react';
import { Story, StoryMeta } from 'styles';

import FormTextEditor, { FormTextEditorProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/TextEditor',
  component: FormTextEditor,
  args: {
    onChange: action('onChange'),
  },
}))();

export const Basic: Story<Props> = props => <FormTextEditor {...props} />;
