import React from 'react';
import { StoryMeta, Story } from 'styles';

import Image, { ImageProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Common/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = props => (
  <Image {...props} style={{ width: 300, height: 200 }} source="https://picsum.photos/id/237/300/200" />
);
