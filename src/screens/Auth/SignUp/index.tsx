import { Button } from '@material-ui/core';
import logoImg from 'assets/logo.png';
import { AuthCopyrights, AuthFormContainer, AuthScreenBackground } from 'components/Auth';
import { Image, ScreenTitle, Text, TextLink, View } from 'components/Common';
import { PasswordInput, TextInput } from 'components/Forms';
import React, { ChangeEvent, FC, useState } from 'react';
import { routes } from 'screens/consts';
import { globalStyles, StyleProps } from 'styles';
import { Log } from 'utils';

import { styles } from './styles';
import { FormData, FormErrs, getFormErrs, polishFormData } from './utils';

const log = Log('screens.AuthSignUp');

type Props = StyleProps;

export const AuthSignUpScreen: FC<Props> = () => {
  const [data, setData] = useState<FormData>({});
  const [errs, setErrs] = useState<FormErrs | undefined>(undefined);
  const [reqErr] = useState<string | undefined>(undefined);
  const [processing] = useState<boolean>(false);
  const [passVisible, setPassVisible] = useState<boolean>(false);

  const { email, firstName, lastName, password, confirmPassword } = data;

  const handleTextFieldChanged = (key: keyof FormData) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.currentTarget;
    setData(polishFormData({ ...data, [key]: value }));
  };

  const handleSubmitPress = async () => {
    const curErrs = getFormErrs(data);
    if (curErrs) {
      return setErrs(curErrs);
    }
    setErrs(undefined);
    if (!email || !firstName || !lastName || !password || !confirmPassword) {
      return;
    }
    log.debug('handle submit press');
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
                value={data.firstName || ''}
                label="First Name"
                InputProps={{ inputProps: { maxLength: 35 } }}
                error={!!errs?.firstName}
                helperText={errs?.firstName}
                onChange={handleTextFieldChanged('firstName')}
              />
            </View>
            <View style={globalStyles.halfBlock} flex="1">
              <TextInput
                value={data.lastName || ''}
                label="Last Name"
                InputProps={{ inputProps: { maxLength: 35 } }}
                error={!!errs?.lastName}
                helperText={errs?.lastName}
                onChange={handleTextFieldChanged('lastName')}
              />
            </View>
          </View>
          <View style={[globalStyles.row, styles.rowIndent]}>
            <TextInput
              value={data.email || ''}
              label="Your Email"
              type="email"
              InputProps={{ inputProps: { maxLength: 35 } }}
              disabled={processing}
              error={!!errs?.email}
              helperText={errs?.email}
              onChange={handleTextFieldChanged('email')}
            />
          </View>
          <View style={[globalStyles.row, styles.rowIndent]} row={true} justifyContent="space-between">
            <View style={globalStyles.halfBlock} column={true} flex="1">
              <View style={styles.password} flex="1">
                <PasswordInput
                  value={data.password || ''}
                  label="Password"
                  disabled={processing}
                  visible={passVisible}
                  error={!!errs?.password}
                  helperText={errs?.password}
                  InputProps={{ inputProps: { maxLength: 100 } }}
                  onChange={handleTextFieldChanged('password')}
                  onChangeVisibleClick={() => setPassVisible(val => !val)}
                />
              </View>
              <PasswordInput
                value={data.confirmPassword || ''}
                label="Confirm Password"
                disabled={processing}
                visible={passVisible}
                error={!!errs?.confirmPassword}
                helperText={errs?.confirmPassword}
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
              {!!reqErr && <Text style={styles.err}>{reqErr}</Text>}
            </View>
            <Button
              style={globalStyles.authSubmitBtn}
              variant="contained"
              color="primary"
              disabled={processing || submitDissabled}
              onClick={handleSubmitPress}
            >
              Sign Up
            </Button>
          </View>
        </AuthFormContainer>
        <AuthCopyrights style={styles.copyright} />
      </AuthScreenBackground>
    </>
  );
};

export default AuthSignUpScreen;
