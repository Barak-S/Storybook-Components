import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import BackgroundedContainer, { BackgroundedContainerProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Layout/BackgroundedContainer',
  component: BackgroundedContainer,
}))();

export const Basic: StoryFC<Props> = props => <BackgroundedContainer {...props}>{'%children%'}</BackgroundedContainer>;
