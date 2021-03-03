import { Grid, useTheme } from '@material-ui/core';
import { AuthCopyrights, AuthFormContainer } from 'components/Auth';
import { SubmitButton } from 'components/Buttons';
import { Logo, ScreenTitle, Splitter, Text, TextLink, View } from 'components/Common';
import { useSnackbar } from 'components/Feedback';
import { PasswordInput, TextInput } from 'components/Forms';
import { BackgroundedContainer } from 'components/Layout';
import { isCognitoErrResponse, useAuth } from 'core/api';
import React, { ChangeEvent, FC, useState } from 'react';
import { routes } from 'screens/consts';
import { globalStyles, StyleProps } from 'styles';
import { errToStr, Log, validators } from 'utils';

import { styles, useStyles } from './styles';
import { FormData, FormErrs, getFormErrs, polishFormData } from './utils';

const log = Log('screens.AuthSignUp');

type Props = StyleProps;

export const AuthSignUpScreen: FC<Props> = () => {
  const [data, setData] = useState<FormData>({});
  const [errs, setErrs] = useState<FormErrs | undefined>(undefined);
  const [processing, setProcessing] = useState<boolean>(false);
  const [passVisible, setPassVisible] = useState<boolean>(false);

  const { signUp, signIn } = useAuth();
  const { showSnackbar } = useSnackbar();

  const { email, firstName, lastName, password, confirmPassword } = data;

  const handleTextFieldChanged = (key: keyof FormData) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setErrs(undefined);
    setData(polishFormData({ ...data, [key]: event.currentTarget.value }));
  };

  const handleSubmitPress = async () => {
    const curErrs = getFormErrs(data);
    if (curErrs) {
      return setErrs(curErrs);
    }
    if (!email || !firstName || !lastName || !password || !confirmPassword) {
      return;
    }
    log.debug('handle submit press');
    try {
      setErrs(undefined);
      setProcessing(true);

      log.debug('sending sign up request');
      await signUp({ email, firstName, lastName, password });
      log.debug('sending sign up request done');

      // Automatically sign in after successful signup
      log.debug('sending sign in request');
      await signIn(email, password);
      log.debug('sending sign in request done');

      showSnackbar('Almost done! Please check your email and confirm your email address.', 'success');
    } catch (err) {
      setProcessing(false);
      setErrs({ request: isCognitoErrResponse(err) ? err.message : errToStr(err) });
    }
  };

  const submitDissabled = !email || !firstName || !lastName || !password || !confirmPassword || !!errs;
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <ScreenTitle title="Sign up" />
      <BackgroundedContainer style={styles.container}>
        <View row className={classes.logo}>
          <Logo />
        </View>
        <View>
          <Text style={styles.title}>{`Let’s Get Started`}</Text>
          <Text style={styles.subtitle}>
            {`Already Registered? `}
            <TextLink href={routes.auth.signin}>{`Sign In`}</TextLink>
          </Text>
          <AuthFormContainer>
            <Grid container justify="space-between" spacing={2} style={{ marginBottom: 15 }}>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <TextInput
                  value={firstName || ''}
                  label="First Name"
                  InputProps={{ inputProps: { maxLength: 35 } }}
                  valid={!validators.getNameErr(firstName)}
                  error={!!errs?.firstName}
                  helperText={errs?.firstName}
                  onChange={handleTextFieldChanged('firstName')}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <TextInput
                  value={lastName || ''}
                  label="Last Name"
                  InputProps={{ inputProps: { maxLength: 35 } }}
                  valid={!validators.getNameErr(lastName)}
                  error={!!errs?.lastName}
                  helperText={errs?.lastName}
                  onChange={handleTextFieldChanged('lastName')}
                />
              </Grid>
              <Grid item xs={12} style={globalStyles.inputItem}>
                <TextInput
                  value={email || ''}
                  label="Your Email"
                  type="email"
                  InputProps={{ inputProps: { maxLength: 50 } }}
                  disabled={processing}
                  valid={!validators.getEmailErr(email)}
                  error={!!errs?.email}
                  helperText={errs?.email}
                  onChange={handleTextFieldChanged('email')}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <PasswordInput
                  value={password || ''}
                  label="Password"
                  disabled={processing}
                  visible={passVisible}
                  valid={!validators.getPasswordErr(password)}
                  error={!!errs?.password}
                  helperText={errs?.password}
                  InputProps={{ inputProps: { maxLength: 100 } }}
                  onChange={handleTextFieldChanged('password')}
                  onChangeVisibleClick={() => setPassVisible(val => !val)}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <Text style={globalStyles.passHint}>
                  {`Password length must be minimum 8 characters,
                                should be alphanumeric with 1 special character.`}
                </Text>
              </Grid>
              <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
                <PasswordInput
                  value={confirmPassword || ''}
                  label="Confirm Password"
                  disabled={processing}
                  visible={passVisible}
                  error={!!errs?.confirmPassword}
                  helperText={errs?.confirmPassword}
                  valid={!validators.getPasswordErr(confirmPassword)}
                  InputProps={{ inputProps: { maxLength: 100 } }}
                  onChange={handleTextFieldChanged('confirmPassword')}
                  onChangeVisibleClick={() => setPassVisible(val => !val)}
                />
              </Grid>
              <Grid container justify="center" spacing={2}>
                <View style={globalStyles.authErrWrap} justifyContent="center" alignItems="center">
                  {!!errs?.request && <Text style={globalStyles.authErr}>{errs.request}</Text>}
                </View>
              </Grid>
              <Grid container justify="center" spacing={2} style={{ marginBottom: 15 }}>
                <Grid item xs={12} sm={4} style={globalStyles.inputItem}>
                  <SubmitButton
                    processing={processing}
                    disabled={processing || submitDissabled}
                    onClick={handleSubmitPress}
                  >
                    Sign Up
                  </SubmitButton>
                </Grid>
              </Grid>
            </Grid>
            {/* <AuthSectionSplitter>{`Or sign up with`}</AuthSectionSplitter> */}
            {/* <AuthSocialLoginButtons /> */}
          </AuthFormContainer>
        </View>

        <Grid className={classes.copyright}>
          <AuthCopyrights />
          <View row justifyContent="center">
            <TextLink href={routes.terms}>Terms of Service</TextLink>
            <Splitter style={styles.splitter} />
            <TextLink href={routes.policy}>Privacy Policy</TextLink>
          </View>
        </Grid>
      </BackgroundedContainer>
    </>
  );
};

export default AuthSignUpScreen;
