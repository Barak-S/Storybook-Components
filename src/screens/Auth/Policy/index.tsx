import React, { FC } from 'react';
import { StyleProps, colors } from 'styles';
import { ContentPolicy } from 'components/Content';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { routes } from 'screens/consts';
import { Text, TextLink, View, ScreenTitle } from 'components/Common';
import { BackgroundedContainer } from 'components/Layout';

type Props = StyleProps;

export const AuthPolicyScreen: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <ScreenTitle title="Privacy Policy" />
      <BackgroundedContainer style={{ minHeight: '100vh', justifyContent: 'flex-start' }}>
        <View className={classes.header} row>
          <Text className={classes.headerText}>{'Have an account?'}</Text>
          <TextLink className={classes.textLink} href={routes.auth.signin}>
            {'log in'}
          </TextLink>
          <TextLink className={classes.signupLink} href={routes.auth.signup}>
            {'Sign up'}
          </TextLink>
        </View>
        <ContentPolicy className={classes.content} />
      </BackgroundedContainer>
    </>
  );
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    content: {
      margin: '10px 35px',
    },
    textLink: {
      textTransform: 'capitalize',
      marginRight: 38,
      position: 'relative',
      display: 'block',
    },
    header: {
      position: 'relative',
      top: 0,
      padding: 20,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 15,

      [theme.breakpoints.up('sm')]: {
        justifyContent: 'flex-end',
        padding: '35px 80px',
        fontSize: 18,
      },
    },
    headerText: {
      color: colors.coolGrey,
      marginRight: 17,
    },
    loginLink: {
      textTransform: 'capitalize',
      marginRight: 38,
      position: 'relative',
    },
    signupLink: {
      color: colors.brownishGrey,
    },
  })();

export type AuthPolicyScreenProps = Props;
export default AuthPolicyScreen;
