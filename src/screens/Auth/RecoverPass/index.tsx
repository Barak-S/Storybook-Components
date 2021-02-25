import { Grid } from '@material-ui/core';
import { AuthFormContainer, AuthScreenBackground } from 'components/Auth';
import { SubmitButton } from 'components/Buttons';
import { Logo, ScreenTitle, Text, TextLink, Title, useSnackbar, View } from 'components/Common';
import { TextInput } from 'components/Forms';
import { isCognitoErrResponse, useAuth } from 'core/api';
import React, { ChangeEvent, FC, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { routes } from 'screens/consts';
import { globalStyles, m, StyleProps, Styles } from 'styles';
import { errToStr, Log, polishers, validators } from 'utils';

const log = Log('screens.AuthRecoverPass');

type Props = StyleProps;

interface LocationState {
  email?: string;
}

interface FormData {
  email?: string;
}

type FormErrs = Partial<Record<keyof FormData, string>> & { request?: string };

const getFormErrs = (data: FormData): FormErrs | undefined => {
  const emailErr = validators.getEmailErr(data.email);
  return emailErr ? { email: emailErr } : undefined;
};

const polishFormData = (data: FormData): FormData => ({
  email: polishers.clearEmail(data.email),
});

export const AuthRecoverPassScreen: FC<Props> = () => {
  const history = useHistory();
  const location = useLocation<LocationState | undefined>();

  const [data, setData] = useState<FormData>({ email: location.state?.email });
  const [errs, setErrs] = useState<FormErrs | undefined>(undefined);
  const [processing, setProcessing] = useState<boolean>(false);

  const { forgotPassowrd } = useAuth();
  const { showSnackbar } = useSnackbar();

  const { email } = data;

  const handleTextFieldChanged = (key: keyof FormData) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.currentTarget;
    setErrs(undefined);
    setData(polishFormData({ ...data, [key]: value }));
  };

  const handleSubmitPress = async () => {
    log.debug('handle submit press');
    if (!email) {
      return;
    }
    const curErrs = getFormErrs(data);
    if (curErrs) {
      return setErrs(curErrs);
    }
    try {
      setErrs(undefined);
      setProcessing(true);

      log.debug('send recover pass request with email=', email);
      await forgotPassowrd(email);
      log.debug('send recover pass request done');

      showSnackbar('A request has been sent. Please check your email', 'success');
      history.push({ pathname: routes.signin, state: { email } });
    } catch (err) {
      log.err('recover pass err=', err);
      setProcessing(false);
      setErrs({ request: isCognitoErrResponse(err) ? err.message : errToStr(err) });
    }
  };

  const submitDissabled = processing || !email || !!errs;

  return (
    <>
      <ScreenTitle title="Password Recovery" />
      <AuthScreenBackground>
        <Logo style={styles.logo} />
        <AuthFormContainer style={styles.container}>
          <Grid container justify="center" style={styles.form}>
            <Title type="h3" style={m(globalStyles.authTitle, styles.title)}>
              recover your password
            </Title>
            <Text style={m(globalStyles.authSubtitle, styles.subtitle)}>
              Enter your email and we will send you instructions to generate a new password.
            </Text>
            <Grid item xs={12}>
              <TextInput
                value={email || ''}
                type="email"
                valid={!validators.getEmailErr(email)}
                error={!!errs?.email}
                helperText={errs?.email}
                label="Email address"
                onChange={handleTextFieldChanged('email')}
              />
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={2}>
            <View
              style={errs?.request ? globalStyles.authErrWrap : undefined}
              justifyContent="center"
              alignItems="center"
            >
              {!!errs?.request && <Text style={globalStyles.authErr}>{errs.request}</Text>}
            </View>
          </Grid>
          <Grid container justify="center" spacing={2} style={styles.submitBtn}>
            <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
              <SubmitButton processing={processing} disabled={submitDissabled} onClick={handleSubmitPress}>
                submit
              </SubmitButton>
            </Grid>
          </Grid>
          <TextLink style={styles.linkBack} href={routes.signin}>
            back to log in
          </TextLink>
        </AuthFormContainer>
      </AuthScreenBackground>
    </>
  );
};

const styles: Styles = {
  container: { maxWidth: 592 },
  logo: {
    marginBottom: 50,
  },
  title: {
    marginBottom: 20,
  },
  subtitle: {
    marginBottom: 30,
  },
  form: {
    marginBottom: 28,
  },
  linkBack: {
    textTransform: 'capitalize',
    textDecoration: 'underline',
  },
  submitBtn: { marginBottom: 40, marginTop: 0 },
};

export default AuthRecoverPassScreen;
