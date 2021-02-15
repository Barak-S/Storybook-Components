import { Paper } from '@material-ui/core';
import { AuthSocialLoginButtons } from 'components/Auth';
import React, { FC } from 'react';
import { m, StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const AuthFormContainer: FC<Props> = ({ style, children }) => {
  return (
    <Paper style={m(styles.container, style)} elevation={2}>
      {children}
      <AuthSocialLoginButtons />
    </Paper>
  );
};

const styles: Styles = {
  container: {
    padding: '45px 80px',
    borderRadius: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    maxWidth: 740,
  },
};

export default AuthFormContainer;
