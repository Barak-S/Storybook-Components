import { Button } from '@material-ui/core';
import logoImg from 'assets/logo.png';
import { AuthFormContainer, AuthScreenBackground } from 'components/Auth';
import { Image, ScreenTitle, Text, TextLink, Title, View } from 'components/Common';
import { CheckboxInput, PasswordInput, TextInput } from 'components/Forms';
import { LockIcon, UserIcon } from 'components/Icons';
import React, { ChangeEvent, FC, useState } from 'react';
import { routes } from 'screens/consts';
import { globalStyles, StyleProps } from 'styles';
import { Log } from 'utils';

import { styles, useStyles } from './styles';

const log = Log('screens.AuthSignIn');

type Props = StyleProps;

interface FormData {
  userName?: string;
  password?: string;
}

export const AuthSignInScreen: FC<Props> = () => {
  const classes = useStyles();
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

  const handleLogInPress = async () => {
    const { userName, password } = data;

    if (!userName || !password) {
      return;
    }

    log.debug('handle log in press');
  };

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
              <View style={styles.row}>
                <TextInput
                  value={data.userName || ''}
                  label="First Name"
                  variant="filled"
                  fullWidth={true}
                  iconStart={<UserIcon />}
                  onChange={handleTextFieldChanged('userName')}
                />
              </View>
              <View style={[globalStyles.row, globalStyles.lastgChild]}>
                <PasswordInput
                  value={data.password || ''}
                  fullWidth={true}
                  label="Password"
                  variant="filled"
                  type="password"
                  disabled={processing}
                  isPasswordVisible={isPasswordVisible}
                  iconStart={<LockIcon />}
                  onShowPasswordClick={handleShowPassword}
                  onChange={handleTextFieldChanged('password')}
                />
              </View>
            </View>
            <View style={globalStyles.row} row justifyContent="space-between" alignItems="center">
              <CheckboxInput label="Log me out after" defaultChecked />
              <TextLink style={styles.resetPass} href={routes.reset}>
                forgot password?
              </TextLink>
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
              onClick={handleLogInPress}
            >
              log in
            </Button>
          </View>
        </AuthFormContainer>
      </AuthScreenBackground>
    </>
  );
};

export default AuthSignInScreen;
