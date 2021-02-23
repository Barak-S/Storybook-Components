import { Grid, useTheme } from '@material-ui/core';
import { AuthFormContainer, AuthScreenBackground, AuthSectionSplitter, AuthSocialLoginButtons } from 'components/Auth';
import { SubmitButton } from 'components/Buttons';
import { Logo, ScreenTitle, Text, TextLink, Title, View } from 'components/Common';
import { CheckboxInput, PasswordInput, TextInput } from 'components/Forms';
import { Icon } from 'components/Icons';
import { isCognitoErrResponse, useAuth } from 'core/api';
import { useQuery } from 'core/navigation';
import React, { ChangeEvent, FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { globalStyles, StyleProps } from 'styles';
import { errToStr, isDictEmpty, Log, polishers, validators } from 'utils';

import { styles, useStyles } from './styles';

const log = Log('screens.AuthSignIn');

type Props = StyleProps;

interface FormData {
  email?: string;
  password?: string;
}

type FormErrs = Partial<Record<keyof FormData, string>> & { request?: string };

const polishData = ({ email, password }: FormData): FormData => ({
  email: polishers.clearEmail(email),
  password: polishers.clearPassword(password),
});

export const AuthSignInScreen: FC<Props> = () => {
  const query = useQuery();
  const history = useHistory();
  const emailQueryParam = query.email ? query.email : undefined;

  const [data, setData] = useState<FormData>({ email: emailQueryParam });
  const [errs, setErrs] = useState<FormErrs | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);
  const [passVisible, setPassVisible] = useState<boolean>(false);

  const { signIn } = useAuth();

  const { email, password } = data;

  const handleTextFieldChanged = (key: keyof FormData) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setErrs(undefined);
    setData(polishData({ ...data, [key]: event.currentTarget.value }));
  };

  const handleLogInPress = async () => {
    if (!email || !password) {
      return;
    }
    const curErrs: FormErrs = {
      email: validators.getEmailErr(email),
      password: validators.getPasswordErr(password),
    };
    if (!isDictEmpty(curErrs)) {
      return setErrs(curErrs);
    }
    log.debug('handle log in press');
    try {
      setErrs(undefined);
      setProcessing(true);

      log.debug('sign in with email=', email);
      await signIn(email, password);
      log.debug('sign in done');

      history.push({ pathname: routes.dashboard });
    } catch (err) {
      log.err('sign in err=', err);
      setProcessing(false);
      setErrs({ request: isCognitoErrResponse(err) ? err.message : errToStr(err) });
    }
  };

  const submitDisabled = !email || !password;
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <ScreenTitle title="Sign in" />
      <AuthScreenBackground style={{ justifyContent: 'initial' }}>
        <View className={classes.header} row>
          <Text style={styles.headerText}>Have an account?</Text>
          <TextLink className={classes.textLink} style={styles.loginLink} href={routes.signin}>
            log in
          </TextLink>
          <TextLink style={styles.signupLink} href={routes.signup}>
            Sign up
          </TextLink>
        </View>
        <Logo />
        <AuthFormContainer>
          <View className={classes.fields}>
            <Grid container justify="center" spacing={2}>
              <Title type={'h3'} style={styles.formTitle}>
                log in
              </Title>
              <Grid item xs={12} style={globalStyles.inputItem}>
                <TextInput
                  value={email || ''}
                  type="email"
                  valid={!validators.getEmailErr(email)}
                  error={!!errs?.email}
                  helperText={errs?.email}
                  label="Email"
                  iconStart={<Icon className="las la-user" style={{ transform: 'scale(1.5)' }} />}
                  onChange={handleTextFieldChanged('email')}
                />
              </Grid>
              <Grid item xs={12} style={globalStyles.inputItem}>
                <PasswordInput
                  value={password || ''}
                  label="Password"
                  disabled={processing}
                  visible={passVisible}
                  valid={!validators.getPasswordErr(password)}
                  error={!!errs?.password}
                  helperText={errs?.password}
                  iconStart={<Icon className="las la-lock" style={{ transform: 'scale(1.3)' }} />}
                  onChangeVisibleClick={() => setPassVisible(val => !val)}
                  onChange={handleTextFieldChanged('password')}
                />
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={12} sm={6}>
                <CheckboxInput label="Keep me logged in" defaultChecked />
              </Grid>
              <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }}>
                <View row className={classes.forgot}>
                  <TextLink style={styles.resetPass} href={routes.recover}>
                    forgot password?
                  </TextLink>
                </View>
              </Grid>
            </Grid>
          </View>
          <Grid container justify="center" spacing={2}>
            <View style={globalStyles.authErrWrap} justifyContent="center" alignItems="center">
              {!!errs?.request && <Text style={globalStyles.authErr}>{errs.request}</Text>}
            </View>
          </Grid>
          <Grid container justify="center" spacing={2} style={{ marginBottom: 15 }}>
            <Grid item xs={12} sm={4} style={globalStyles.inputItem}>
              <SubmitButton processing={processing} disabled={processing || submitDisabled} onClick={handleLogInPress}>
                Log in
              </SubmitButton>
            </Grid>
          </Grid>
          <AuthSectionSplitter>{`Or login with`}</AuthSectionSplitter>
          <AuthSocialLoginButtons />
        </AuthFormContainer>
      </AuthScreenBackground>
    </>
  );
};

export default AuthSignInScreen;
