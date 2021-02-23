import { Grid } from '@material-ui/core';
import { AuthFormContainer, AuthScreenBackground } from 'components/Auth';
import { Logo, ScreenTitle, Title, Text, View, TextLink, useSnackbar } from 'components/Common';
import { TextInput } from 'components/Forms';
import React, { ChangeEvent, FC, useState } from 'react';
import { isCognitoErrResponse, useAuth } from 'core/api';
import { globalStyles, m, StyleProps } from 'styles';
import { errToStr, Log, validators } from 'utils';
import { SubmitButton } from 'components/Buttons';

import { routes } from 'screens/consts';
import { styles } from './styles';
import { useHistory } from 'react-router-dom';

const log = Log('screens.AuthRecoverPass');

type Props = StyleProps;

interface FormData {
  email?: string;
}

export const AuthRecoverPassScreen: FC<Props> = () => {
  const [data, setData] = useState<FormData>({});
  const [reqErr, setReqErr] = useState<string | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);

  const { forgotPassowrd } = useAuth();
  const history = useHistory();
  const { showSnackbar } = useSnackbar();

  const { email } = data;

  const handleTextFieldChanged = (key: keyof FormData) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.currentTarget;
    setData({ ...data, [key]: value });
  };

  const handleSubmitPress = async () => {
    if (!email) {
      return;
    }
    log.debug('handle submit press');
    try {
      setReqErr(undefined);
      setProcessing(true);
      log.debug('send recover pass request with email=', email);
      await forgotPassowrd(email);
      log.debug('send recover pass request done');
      showSnackbar('A request has been sent. Please check your email');
      history.push({ pathname: routes.signin, search: `?email=${email}` });
    } catch (err) {
      log.err('recover pass err=', err);
      setProcessing(false);
      setReqErr(isCognitoErrResponse(err) ? err.message : errToStr(err));
    }
  };

  return (
    <>
      <ScreenTitle title="Password Recovery" />
      <AuthScreenBackground>
        <Logo style={styles.logo} />
        <AuthFormContainer style={{ maxWidth: 592 }}>
          <Grid container justify="center" style={{ marginBottom: 20 }}>
            <Title type="h3" style={m(globalStyles.authTitle, styles.authTitle)}>
              recover your password
            </Title>
            <Text style={m(globalStyles.authSubtitle, styles.authSubtitle)}>
              Enter your email and we will send you instructions to generate a new password.
            </Text>
            <Grid item xs={12}>
              <TextInput
                value={email || ''}
                type="email"
                valid={!validators.getEmailErr(email)}
                label="Email address"
                onChange={handleTextFieldChanged('email')}
              />
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={2}>
            <View style={reqErr ? globalStyles.authErrWrap : undefined} justifyContent="center" alignItems="center">
              {!!reqErr && <Text style={globalStyles.authErr}>{reqErr}</Text>}
            </View>
          </Grid>
          <Grid container justify="center" spacing={2} style={{ marginBottom: 40 }}>
            <Grid item xs={12} sm={6} style={globalStyles.inputItem}>
              <SubmitButton processing={processing} disabled={processing || !email} onClick={handleSubmitPress}>
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

export default AuthRecoverPassScreen;
