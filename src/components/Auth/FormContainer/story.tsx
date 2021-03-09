import React from 'react';
import { StoryConf, StoryFC } from 'styles';

import AuthFormContainer, { AuthFormContainerProps } from '.';

const conf: StoryConf<AuthFormContainerProps> = {
  title: 'Components/Auth/FormContainer',
  component: AuthFormContainer,
};

export const Basic: StoryFC<AuthFormContainerProps> = props => (
  <AuthFormContainer {...props}>{'%children%'}</AuthFormContainer>
);

export default conf;
