import React, { FC, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { scrollToTop } from 'styles';
import AuthRecoverPassScreen from './RecoverPass';
import AuthResetPass from './ResetPass';
import AuthSignInScreen from './SignIn';
import AuthSignUpScreen from './SignUp';
import AuthTermsScreen from './Terms';
import AuthPolicyScreen from './Policy';
import AuthFaqScreen from './FAQ';

export const AuthScreens: FC = () => {
  const history = useHistory();

  useEffect(() => {
    history.listen(() => scrollToTop());
  }, []);

  return (
    <Switch>
      <Route path={routes.auth.signup}>
        <AuthSignUpScreen />
      </Route>
      <Route path={routes.auth.signin}>
        <AuthSignInScreen />
      </Route>
      <Route path={routes.auth.recover}>
        <AuthRecoverPassScreen />
      </Route>
      <Route path={routes.auth.reset}>
        <AuthResetPass />
      </Route>
      <Route path={routes.terms}>
        <AuthTermsScreen />
      </Route>
      <Route path={routes.policy}>
        <AuthPolicyScreen />
      </Route>
      <Route path={routes.faq}>
        <AuthFaqScreen />
      </Route>
      <Redirect to={routes.auth.signin} />
    </Switch>
  );
};

export default AuthScreens;
