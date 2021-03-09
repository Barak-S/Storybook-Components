import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import AuthFormContainer, { AuthFormContainerProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Auth/FormContainer',
  component: AuthFormContainer,
}))();

export const Basic: StoryFC<Props> = props => <AuthFormContainer {...props}>{'%children%'}</AuthFormContainer>;
