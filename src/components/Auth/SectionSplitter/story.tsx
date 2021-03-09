import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import AuthSectionSplitter, { AuthSectionSplitterProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Auth/SectionSplitter',
  component: AuthSectionSplitter,
}))();

export const Basic: StoryFC<Props> = props => <AuthSectionSplitter {...props}>{'Text'}</AuthSectionSplitter>;
