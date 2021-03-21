import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormSelectFileBtn, { FormSelectFileBtnProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/SelectFileBtn',
  component: FormSelectFileBtn,
  parameters: {
    layout: 'centered',
    ...sbAutoDetectActionProps,
  },
}))();

export const Basic: Story<Props> = args => <FormSelectFileBtn {...args} />;
