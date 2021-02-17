import { Button, CircularProgress } from '@material-ui/core';
import logoImg from 'assets/logo.png';
import { AuthFormContainer, AuthScreenBackground, AuthSectionSplitter, AuthSocialLoginButtons } from 'components/Auth';
import { Image, ScreenTitle, Text, TextLink, Title, View } from 'components/Common';
import { CheckboxInput, PasswordInput, TextInput } from 'components/Forms';
import { LockIcon, UserIcon } from 'components/Icons';
import { isCognitoErrResponse, useAuth } from 'core/api';
import React, { ChangeEvent, FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { globalStyles, StyleProps } from 'styles';
import { errToStr, Log, validators } from 'utils';

import { styles, useStyles } from './styles';

const log = Log('screens.AuthSignIn');

type Props = StyleProps;

interface FormData {
  email?: string;
  password?: string;
}

export const AuthSignInScreen: FC<Props> = () => {
  const [data, setData] = useState<FormData>({});
  const [reqErr, setReqErr] = useState<string | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);
  const [passVisible, setPassVisible] = useState<boolean>(false);

  const history = useHistory();
  const { signIn } = useAuth();

  const { email, password } = data;

  const handleTextFieldChanged = (key: keyof FormData) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.currentTarget;
    setData({ ...data, [key]: value });
  };

  const handleLogInPress = async () => {
    if (!email || !password) {
      return;
    }
    log.debug('handle log in press');
    try {
      setReqErr(undefined);
      setProcessing(true);

      log.debug('sign in with email=', email);
      await signIn(email, password);
      log.debug('sign in done');

      history.push({ pathname: routes.dashboard });
    } catch (err) {
      log.err('sign in err=', err);
      setProcessing(false);
      setReqErr(isCognitoErrResponse(err) ? err.message : errToStr(err));
    }
  };

  const submitDisabled = !email || !password;

  const classes = useStyles();

  return (
    <>
      <ScreenTitle title="Sign in" />
      <AuthScreenBackground>
        <View style={styles.header} row>
          <Text style={styles.headerText}>Have an account?</Text>
          <TextLink className={classes.root} style={styles.loginLink} href={routes.signin}>
            log in
          </TextLink>
          <TextLink style={styles.signupLink} href={routes.signup}>
            Sign up
          </TextLink>
        </View>
        <Image style={styles.logo} source={logoImg} />
        <AuthFormContainer>
          <View style={styles.fields}>
            <View style={[globalStyles.row, styles.inputFields]} column>
              <Title type={'h3'} style={styles.formTitle}>
                log in
              </Title>
              <View style={globalStyles.row}>
                <TextInput
                  value={email || ''}
                  type="email"
                  valid={!validators.getEmailErr(email)}
                  label="Email"
                  iconStart={<UserIcon style={{ transform: 'scale(1.5)' }} />}
                  onChange={handleTextFieldChanged('email')}
                />
              </View>
              <View style={[globalStyles.row, globalStyles.lastgChild]}>
                <PasswordInput
                  value={password || ''}
                  label="Password"
                  disabled={processing}
                  visible={passVisible}
                  valid={!validators.getPasswordErr(password)}
                  iconStart={<LockIcon style={{ transform: 'scale(1.3)' }} />}
                  onChangeVisibleClick={() => setPassVisible(val => !val)}
                  onChange={handleTextFieldChanged('password')}
                />
              </View>
            </View>
            <View style={globalStyles.row} row justifyContent="space-between" alignItems="center">
              <CheckboxInput label="Keep me logged in" defaultChecked />
              <TextLink style={styles.resetPass} href={routes.reset}>
                forgot password?
              </TextLink>
            </View>
          </View>
          <View style={[globalStyles.row, globalStyles.authSubmitWrap]}>
            <View style={styles.errWrap} justifyContent="center" alignItems="center">
              {!!reqErr && <Text style={styles.err}>{reqErr}</Text>}
            </View>
            <Button
              style={globalStyles.authSubmitBtn}
              variant="contained"
              color="primary"
              disabled={processing || submitDisabled}
              onClick={handleLogInPress}
            >
              {processing ? <CircularProgress color="secondary" size={20} /> : 'Log in'}
            </Button>
          </View>
          <AuthSectionSplitter>{`Or login with`}</AuthSectionSplitter>
          <AuthSocialLoginButtons />
        </AuthFormContainer>
      </AuthScreenBackground>
    </>
  );
};

export default AuthSignInScreen;
