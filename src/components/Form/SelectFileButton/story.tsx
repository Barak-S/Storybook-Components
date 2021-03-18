import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';

import FormSelectFileButton, { FormSelectFileButtonProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/SelectFileButton',
  component: FormSelectFileButton,
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <FormSelectFileButton {...args} />;
