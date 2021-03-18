import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';

import FormTextEditor, { FormTextEditorProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/TextEditor',
  component: FormTextEditor,
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <FormTextEditor {...args} />;
