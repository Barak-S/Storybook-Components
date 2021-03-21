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
