import React from 'react';
import { StoryMeta, Story } from 'styles';

import AuthFormContainer, { AuthFormContainerProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Auth/FormContainer',
  component: AuthFormContainer,
}))();

export const Basic: Story<Props> = props => <AuthFormContainer {...props}>{'%children%'}</AuthFormContainer>;
