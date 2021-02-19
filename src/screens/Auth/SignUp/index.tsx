import { Button, CircularProgress } from '@material-ui/core';
import logoImg from 'assets/logo.png';
import {
  AuthCopyrights,
  AuthFormContainer,
  AuthScreenBackground,
  AuthSectionSplitter,
  AuthSocialLoginButtons,
} from 'components/Auth';
import { Image, ScreenTitle, Text, TextLink, View } from 'components/Common';
import { PasswordInput, TextInput } from 'components/Forms';
import { isCognitoErrResponse, useAuth } from 'core/api';
import React, { ChangeEvent, FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { globalStyles, StyleProps } from 'styles';
import { errToStr, Log, validators } from 'utils';

import { styles } from './styles';
import { FormData, FormErrs, getFormErrs, polishFormData } from './utils';

const log = Log('screens.AuthSignUp');

type Props = StyleProps;

export const AuthSignUpScreen: FC<Props> = () => {
  const [data, setData] = useState<FormData>({});
  const [errs, setErrs] = useState<FormErrs | undefined>(undefined);
  const [processing, setProcessing] = useState<boolean>(false);
  const [passVisible, setPassVisible] = useState<boolean>(false);

  const history = useHistory();
  const { signUp } = useAuth();

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

      await signUp({ email, firstName, lastName, password });

      history.push({ pathname: routes.dashboard });
    } catch (err) {
      setProcessing(false);
      setErrs({ request: isCognitoErrResponse(err) ? err.message : errToStr(err) });
    }
  };

  const submitDissabled = !email || !firstName || !lastName || !password || !confirmPassword || !!errs;

  return (
    <>
      <ScreenTitle title="Sign up" />
      <AuthScreenBackground>
        <Image style={styles.logo} source={logoImg} />
        <Text style={styles.title}>{`Let’s Get Started`}</Text>
        <Text style={styles.subtitle}>
          {`Already Registered? `}
          <TextLink href={routes.signin}>{`Sign In`}</TextLink>
        </Text>
        <AuthFormContainer>
          <View style={globalStyles.row} row={true} justifyContent={'space-between'}>
            <View style={globalStyles.halfBlock} flex="1">
              <TextInput
                value={firstName || ''}
                label="First Name"
                InputProps={{ inputProps: { maxLength: 35 } }}
                valid={!validators.getNameErr(firstName)}
                error={!!errs?.firstName}
                helperText={errs?.firstName}
                onChange={handleTextFieldChanged('firstName')}
              />
            </View>
            <View style={globalStyles.halfBlock} flex="1">
              <TextInput
                value={lastName || ''}
                label="Last Name"
                InputProps={{ inputProps: { maxLength: 35 } }}
                valid={!validators.getNameErr(lastName)}
                error={!!errs?.lastName}
                helperText={errs?.lastName}
                onChange={handleTextFieldChanged('lastName')}
              />
            </View>
          </View>
          <View style={[globalStyles.row, styles.rowIndent]}>
            <TextInput
              value={email || ''}
              label="Your Email"
              type="email"
              InputProps={{ inputProps: { maxLength: 35 } }}
              disabled={processing}
              valid={!validators.getEmailErr(email)}
              error={!!errs?.email}
              helperText={errs?.email}
              onChange={handleTextFieldChanged('email')}
            />
          </View>
          <View style={[globalStyles.row, styles.rowIndent]} row={true} justifyContent="space-between">
            <View style={globalStyles.halfBlock} column={true} flex="1">
              <View style={styles.password} flex="1">
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
              </View>
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
            </View>
            <View flex="1" style={globalStyles.halfBlock}>
              <Text style={styles.passHint}>
                {`Password length must be minimum 8 characters,
                                should be alphanumeric with 1 special character.`}
              </Text>
            </View>
          </View>
          <View style={[globalStyles.row, globalStyles.authSubmitWrap]}>
            <View style={styles.errWrap} justifyContent="center" alignItems="center">
              {!!errs?.request && <Text style={styles.err}>{errs.request}</Text>}
            </View>
            <Button
              style={globalStyles.authSubmitBtn}
              variant="contained"
              color="primary"
              disabled={processing || submitDissabled}
              onClick={handleSubmitPress}
            >
              {processing ? <CircularProgress color="secondary" size={20} /> : 'Sign Up'}
            </Button>
          </View>
          <AuthSectionSplitter>{`Or sign up with`}</AuthSectionSplitter>
          <AuthSocialLoginButtons />
        </AuthFormContainer>
        <AuthCopyrights style={styles.copyright} />
      </AuthScreenBackground>
    </>
  );
};

export default AuthSignUpScreen;
