import React from 'react';
import { Story, StoryMeta } from 'utils';

import FormDragnDropImage, { FormDragnDropImageProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/DragnDropImage',
  component: FormDragnDropImage,
  parameters: {
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = args => <FormDragnDropImage {...args} />;

export const Processing: Story<Props> = args => <FormDragnDropImage {...args} />;

Processing.args = {
  processing: true,
};

Processing.argTypes = {
  processing: {
    control: false,
  },
};

export const Image: Story<Props> = args => <FormDragnDropImage {...args} />;

Image.args = {
  src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7',
};

Image.argTypes = {
  processing: {
    src: false,
  },
};
