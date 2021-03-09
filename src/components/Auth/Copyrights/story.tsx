import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import AuthCopyrights, { AuthCopyrightsProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Auth/Copyrights',
  component: AuthCopyrights,
}))();

export const Basic: StoryFC<Props> = props => <AuthCopyrights {...props} />;
