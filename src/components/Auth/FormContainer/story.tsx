import React from 'react';

import AuthFormContainer from '.';

export default {
  title: 'Components/Auth/FormContainer',
  component: AuthFormContainer,
};

export const Basic = () => <AuthFormContainer>{'%children%'}</AuthFormContainer>;
