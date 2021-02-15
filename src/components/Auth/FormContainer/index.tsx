import { Paper } from '@material-ui/core';
import React, { FC } from 'react';

import { AuthSocialLoginButtons } from '..';
import { styles } from './styles';

export const AuthFormContainer: FC = ({ children }) => {
  return (
    <Paper style={styles.authForm} elevation={2}>
      {children}
      <AuthSocialLoginButtons />
    </Paper>
  );
};

export default AuthFormContainer;
