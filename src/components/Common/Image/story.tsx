import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import Image, { ImageProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Common/Image',
  component: Image,
}))();

export const Basic: StoryFC<Props> = props => (
  <Image style={{ width: 300, height: 200 }} source={'https://picsum.photos/id/237/300/200'} {...props} />
);
