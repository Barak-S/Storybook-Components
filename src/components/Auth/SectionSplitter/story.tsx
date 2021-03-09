import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import AuthSectionSplitter, { AuthSectionSplitterProps } from '.';

const conf: StoryConf<AuthSectionSplitterProps> = {
  title: 'Components/Auth/SectionSplitter',
  component: AuthSectionSplitter,
};

export const Basic: StoryFC<AuthSectionSplitterProps> = props => (
  <AuthSectionSplitter {...props}>{'Text'}</AuthSectionSplitter>
);

export default conf;
