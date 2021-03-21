import React from 'react';
import { Story, StoryMeta } from 'utils';

import FormUploadBtn, { FormUploadBtnProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/UploadBtn',
  component: FormUploadBtn,
  args: {
    isUpload: true,
  },
}))();

export const Basic: Story<Props> = args => <FormUploadBtn {...args} />;
