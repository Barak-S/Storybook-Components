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

const log = Log('screens.AuthSignUp');

type Props = StyleProps;

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const AuthSignUpScreen: FC<Props> = () => {
  const [data, setData] = useState<FormData>({});
  const [err] = useState<string | undefined>();
  const [processing] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleShowPassword = (): void => {
    setIsPasswordVisible(isPasswordVisible => !isPasswordVisible);
  };

  const handleTextFieldChanged = (key: keyof FormData) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.currentTarget;
    setData({ ...data, [key]: value });
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
                variant="filled"
                fullWidth={true}
                onChange={handleTextFieldChanged('firstName')}
              />
            </View>
            <View style={globalStyles.halfBlock} flex="1">
              <TextInput
                value={data.lastName || ''}
                label="Last Name"
                variant="filled"
                fullWidth={true}
                onChange={handleTextFieldChanged('lastName')}
              />
            </View>
          </View>
          <View style={[globalStyles.row, styles.rowIndent]}>
            <TextInput
              value={data.email || ''}
              label="Your Email"
              variant="filled"
              type="email"
              fullWidth={true}
              disabled={processing}
              onChange={handleTextFieldChanged('email')}
            />
          </View>
          <View style={[globalStyles.row, styles.rowIndent]} row={true} justifyContent="space-between">
            <View style={globalStyles.halfBlock} column={true} flex="1">
              <View style={styles.password} flex="1">
                <PasswordInput
                  value={data.password || ''}
                  fullWidth={true}
                  label="Password"
                  variant="filled"
                  type="password"
                  disabled={processing}
                  isPasswordVisible={isPasswordVisible}
                  onChange={handleTextFieldChanged('password')}
                  onShowPasswordClick={handleShowPassword}
                />
              </View>
              <PasswordInput
                value={data.confirmPassword || ''}
                fullWidth={true}
                label="Confirm Password"
                disabled={processing}
                variant="filled"
                isPasswordVisible={isPasswordVisible}
                onChange={handleTextFieldChanged('confirmPassword')}
                onShowPasswordClick={handleShowPassword}
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
              {!!err && <Text style={styles.err}>{err}</Text>}
            </View>
            <Button
              style={globalStyles.authSubmitBtn}
              variant="contained"
              color="primary"
              disabled={processing}
              onClick={handleSignInPress}
            >
              Sign Up
            </Button>
          </View>
        </AuthFormContainer>
        <AuthCopyrights />
      </AuthScreenBackground>
    </>
  );
};

export default AuthSignUpScreen;
