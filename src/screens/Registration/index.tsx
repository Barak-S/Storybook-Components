import { useTheme } from '@material-ui/core';
import { Log } from 'core';
import React, { FC, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
// import { useSelector } from 'store';
import { scrollToTop, StyleProps } from 'styles';
import RegisterSubscribeScreen from './Subscribe';
import { BackgroundedContainer } from 'components/Layout';
import { BrandLogo } from 'components/Brand';
import { useStyles } from './styles';

type Props = StyleProps;

export const RegistrationScreens: FC<Props> = () => {
  const history = useHistory();
  // const log = Log('screens.RegistrationSubscribe');

  useEffect(() => {
    history.listen(() => scrollToTop('auto'));
  }, []);

  // const user = useSelector(s => s.user.data);

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <BackgroundedContainer style={{ justifyContent: 'initial', minHeight: '100vh' }}>
      <div className={classes.logoWrap}>
        <BrandLogo className={classes.logo} />
      </div>
      <Switch>
        <Route path={routes.register.subscribe}>
          <RegisterSubscribeScreen />
        </Route>
        <Redirect to={routes.register.subscribe} />
      </Switch>
    </BackgroundedContainer>
  );
};

export type RegistrationScreensProps = Props;
export default RegistrationScreens;
