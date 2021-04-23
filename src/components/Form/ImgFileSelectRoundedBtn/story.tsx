import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormImgFileSelectRoundedBtn, { FormImgFileSelectRoundedBtnProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/ImgFileSelectRoundedBtn',
  component: FormImgFileSelectRoundedBtn,
  args: {},
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <FormImgFileSelectRoundedBtn {...args} />;

export const Selected: Story<Props> = args => <FormImgFileSelectRoundedBtn {...args} />;

Selected.args = {
  src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
};

export const Processing: Story<Props> = args => <FormImgFileSelectRoundedBtn {...args} />;

Processing.args = {
  processing: true,
};
