import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { Elements as StripeElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrandLogo } from 'components/Brand';
import { BackgroundedContainer } from 'components/Layout';
import { appConfig } from 'core';
import React, { FC, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { scrollToTop, StyleProps } from 'styles';

import PaywallPayScreen from './Pay';
import PaywallPlansScreen from './Plans';

type Props = StyleProps;

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(appConfig.stripe.key);

export const PaywallScreens: FC<Props> = () => {
  const history = useHistory();

  useEffect(() => {
    history.listen(() => scrollToTop('auto'));
  }, []);

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <BackgroundedContainer style={{ justifyContent: 'initial', minHeight: '100vh' }}>
      <div className={classes.logoWrap}>
        <BrandLogo className={classes.logo} />
      </div>
      <Switch>
        <Route path={routes.paywall.plans}>
          <PaywallPlansScreen />
        </Route>
        <Route path={routes.paywall.pay}>
          <StripeElements stripe={stripePromise}>
            <PaywallPayScreen />
          </StripeElements>
        </Route>
        <Redirect to={routes.paywall.plans} />
      </Switch>
    </BackgroundedContainer>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    logoWrap: {
      position: 'fixed',
      top: theme.spacing(6),
      left: theme.spacing(6),
    },
    logo: {
      width: 140,
      height: 80,
    },
  })();

export type PaywallScreensProps = Props;
export default PaywallScreens;
