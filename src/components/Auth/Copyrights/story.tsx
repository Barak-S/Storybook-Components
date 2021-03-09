import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import AuthCopyrights, { AuthCopyrightsProps } from '.';

const conf: StoryConf<AuthCopyrightsProps> = {
  title: 'Components/Auth/Copyrights',
  component: AuthCopyrights,
};

export const Basic: StoryFC<AuthCopyrightsProps> = props => <AuthCopyrights {...props} />;

export default conf;
