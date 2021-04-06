import { Grid, useTheme } from '@material-ui/core';
import { AuthFormContainer, AuthSectionSplitter, AuthSocialLoginButtons } from 'components/Auth';
import { BrandLogo } from 'components/Brand';
import { ContainedButton, SocialButtonNetworkType } from 'components/Buttons';
import { Text, TextLink, Title, View } from 'components/Common';
import { useSnackbar } from 'components/Feedback';
import { FormCheckboxInput, FormPasswordInput, FormTextInput } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';
import { BackgroundedContainer } from 'components/Layout';
import { ScreenTitle } from 'components/Screen';
import { appConfig, Log } from 'core';
import { getAmpifyStorageType, setAmpifyStorageType } from 'core/amplify';
import { Auth, CognitoHostedUIIdentityProvider, isCognitoErrResponse, useAuth } from 'core/auth';
import { useQuery } from 'core/navigation';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { routes } from 'screens/consts';
import { globalStyles, StyleProps } from 'styles';
import { errToStr, isDictEmpty, polish, validators } from 'utils';

import { styles, useStyles } from './styles';

const log = Log('screens.AuthSignIn');

type Props = StyleProps;

interface LocationState {
  email?: string;
  source?: string;
}

interface FormData {
  email?: string;
  password?: string;
}

type FormErrs = Partial<Record<keyof FormData, string>> & { request?: string };

const polishData = ({ email, password }: FormData): FormData => ({
  email: polish.email(email),
  password: polish.password(password),
});

export const AuthSignInScreen: FC<Props> = () => {
  const history = useHistory();
  const query = useQuery();
  const location = useLocation<LocationState | undefined>();
  const emailParam = query.email || location.state?.email;
  const sourceParam = query.source || location.state?.source;

  const [data, setData] = useState<FormData>({ email: emailParam });
  const [errs, setErrs] = useState<FormErrs | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);
  const [passVisible, setPassVisible] = useState<boolean>(false);
  const [keepAuth, setKeepAuth] = useState<boolean>(getAmpifyStorageType() === 'local');

  const { showSnackbar } = useSnackbar();
  const { signIn } = useAuth();
  const { email, password } = data;

  // Effects

  useEffect(() => {
    if (sourceParam === 'cognitoConfirmUser') {
      showSnackbar('Your email has been confirmed! Please log in with your password.', 'success');
    }
  }, []);

  // Handlers

  const handleTextFieldChanged = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErrs(undefined);
    setData(polishData({ ...data, [key]: event.currentTarget.value }));
  };

  const handleForgotPassClick = () => {
    history.push({ pathname: routes.auth.recover, state: { email: data.email } });
  };

  const handleKeepAuthChange = () => {
    const newVal = !keepAuth;
    if (newVal) {
      setAmpifyStorageType('local');
    } else {
      setAmpifyStorageType('session');
    }
    setKeepAuth(newVal);
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

      history.push({ pathname: routes.dashboard.index });
    } catch (err: unknown) {
      log.err('sign in err=', err);
      setProcessing(false);
      setErrs({ request: isCognitoErrResponse(err) ? err.message : errToStr(err) });
    }
  };

  const handleSocilaLoginBtnClick = async (btn: SocialButtonNetworkType) => {
    log.debug('handle social login btn click, btn=', btn);
    try {
      if (btn === 'google') {
        await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
      }
      if (btn === 'facebook') {
        await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook });
      }
    } catch (err: unknown) {
      log.err(err);
    }
  };

  // Render

  const submitDisabled = !email || !password;
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <ScreenTitle title="Sign in" />
      <BackgroundedContainer style={{ justifyContent: 'initial', minHeight: '100vh' }}>
        <View className={classes.header} row>
          <Text style={styles.headerText}>{'Have an account?'}</Text>
          <TextLink className={classes.textLink} style={styles.loginLink} href={routes.auth.signin}>
            {'log in'}
          </TextLink>
          <TextLink style={styles.signupLink} href={routes.auth.signup}>
            {'Sign up'}
          </TextLink>
        </View>
        <BrandLogo className={classes.logo} type="text" />
        <AuthFormContainer>
          <View className={classes.fields}>
            <Grid container justify="center" spacing={2}>
              <Title type="h3" style={styles.formTitle}>
                {'log in'}
              </Title>
              <Grid item xs={12} style={globalStyles.inputItem}>
                <FormTextInput
                  value={email || ''}
                  type="email"
                  valid={!validators.getEmailErr(email)}
                  error={!!errs?.email}
                  helperText={errs?.email}
                  maxLength={50}
                  label="Email"
                  iconStart={<LineAwesomeIcon type="user" />}
                  onChange={handleTextFieldChanged('email')}
                />
              </Grid>
              <Grid item xs={12} style={globalStyles.inputItem}>
                <FormPasswordInput
                  value={password || ''}
                  label="Password"
                  disabled={processing}
                  visible={passVisible}
                  valid={!validators.getPasswordErr(password)}
                  error={!!errs?.password}
                  maxLength={100}
                  helperText={errs?.password}
                  iconStart={<LineAwesomeIcon type="lock" />}
                  onChangeVisibleClick={() => setPassVisible(val => !val)}
                  onChange={handleTextFieldChanged('password')}
                />
              </Grid>
            </Grid>
            <Grid container justify="space-between" spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormCheckboxInput label="Keep me logged in" checked={keepAuth} onChange={handleKeepAuthChange} />
              </Grid>
              <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }}>
                <View row className={classes.forgot}>
                  <TextLink style={styles.resetPass} onClick={handleForgotPassClick}>
                    {'forgot password?'}
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
              <ContainedButton
                processing={processing}
                disabled={processing || submitDisabled}
                onClick={handleLogInPress}
                style={{ width: '100%' }}
              >
                {'Log in'}
              </ContainedButton>
            </Grid>
          </Grid>
          {appConfig.features.socialSignIn && (
            <>
              <AuthSectionSplitter>{`Or login with`}</AuthSectionSplitter>
              <AuthSocialLoginButtons onBtnClick={handleSocilaLoginBtnClick} />
            </>
          )}
        </AuthFormContainer>
      </BackgroundedContainer>
    </>
  );
};

export default AuthSignInScreen;
