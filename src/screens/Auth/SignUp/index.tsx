import { Button, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Image, ScreenTitle, Text, TextLink, View } from 'components/Common';
import React, { ChangeEvent, FC, useState } from 'react';
import { routes } from 'screens/consts';
import { colors, m, px, StyleProps, Styles } from 'styles';
import { Log } from 'utils';

import backgroundImg from './assets/background.png';
import logoImg from './assets/logo.png';

const log = Log('screen.AuthEntry');

type Props = StyleProps;

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const SignUpScreen: FC<Props> = () => {
  const [data, setData] = useState<FormData>({});
  const [err, setErr] = useState<string | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);

  const handleTextFieldChanged = (k: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setData({ ...data, [k]: value });
  };

  const handleSignInPress = async () => {
    const { email, firstName, lastName } = data;
    if (!email || !firstName || !lastName) {
      return;
    }
    log.debug('handle sign in press');
  };

  return (
    <>
      <ScreenTitle title="Login" />
      <View style={styles.container}>
        <Image style={styles.logo} source={logoImg} />
        <View style={styles.content} column={true}>
          <Text style={styles.title}>{`Let’s Get Started`}</Text>
          <Text style={styles.subtitle}>
            {`Already Registered? `}
            <TextLink href={routes.signin}>{`Sign In`}</TextLink>
          </Text>
          <Paper style={styles.form} elevation={2}>
            <View style={styles.row} row={true}>
              <TextField
                value={data.firstName || ''}
                label="First Name"
                variant="filled"
                fullWidth={true}
                onChange={handleTextFieldChanged('firstName')}
              />
              <TextField
                value={data.lastName || ''}
                label="Last Name"
                variant="filled"
                fullWidth={true}
                onChange={handleTextFieldChanged('lastName')}
              />
            </View>
            <View style={[styles.row, styles.rowIndent]}>
              <TextField
                value={data.email || ''}
                label="Email"
                variant="filled"
                type="email"
                fullWidth={true}
                disabled={processing}
                onChange={handleTextFieldChanged('email')}
              />
            </View>
            <View style={[styles.row, styles.rowIndent]} row={true}>
              <View column={true} flex="1">
                <TextField
                  value={data.password}
                  fullWidth={true}
                  label="Password"
                  variant="filled"
                  type="password"
                  disabled={processing}
                  onChange={handleTextFieldChanged('password')}
                />
                <TextField
                  style={m(styles.rowInden)}
                  value={data.confirmPassword}
                  fullWidth={true}
                  label="Confirm Password"
                  variant="filled"
                  type="password"
                  disabled={processing}
                  onChange={handleTextFieldChanged('confirmPassword')}
                />
              </View>
              <View flex="1">
                <Text style={styles.passHint}>
                  {`Password length must be minimum 8 characters, should be alphanumeric with 1 special character.`}
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.errWrap} justifyContent="center" alignItems="center">
                {!!err && <Text style={styles.err}>{err}</Text>}
              </View>
              <Button
                style={styles.submitBtn}
                variant="contained"
                color="primary"
                disabled={processing}
                onClick={handleSignInPress}
              >
                Sign Up
              </Button>
            </View>
          </Paper>
        </View>
        <Text style={styles.copyright}>{`Copyright © ${new Date().getFullYear()} All rights reserved.`}</Text>
      </View>
    </>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url("${backgroundImg}")`,
    backgroundSize: 'cover',
  },
  logo: {
    position: 'absolute',
    left: 72,
    top: 58,
    width: 224,
    height: 126,
  },
  content: {
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: px(30),
  },
  subtitle: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: px(16),
    marginTop: 10,
    position: 'relative',
  },
  form: {
    marginTop: 45,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 45,
    paddingBottom: 45,
    borderRadius: 30,
    maxWidth: 740,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    width: '100%',
  },
  rowIndent: {
    marginTop: 30,
  },
  passHint: {
    fontSize: px(16),
    fontStyle: 'italic',
    color: colors.gray,
  },
  errWrap: {
    height: 30,
  },
  err: {
    color: colors.error,
    fontSize: px(12),
    textAlign: 'center',
  },
  submitBtn: {
    maxWidth: 187,
  },
  copyright: {
    position: 'absolute',
    left: 82,
    bottom: 41,
    color: colors.gray,
    fontSize: px(16),
  },
};

export type SignUpScreenProps = Props;
export default SignUpScreen;
