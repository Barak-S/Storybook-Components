import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { BackgroundedContainer } from 'components/Layout';
import { onboardignSetupSteps as steps } from 'components/Setup';
import React, { FC } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { StyleProps } from 'styles';

import OnboardingEventScreen from './Event';
import OnboardingOrganizationScreen from './Organization';
import OnboardingTeamScreen from './Team';
import OnboardingThemeScreen from './Theme';

type Props = StyleProps;

export const OnboardingScreens: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();

  const handleCloseClick = () => history.push(routes.dashboard.events.list);

  return (
    <BackgroundedContainer className={classes.container}>
      <Grid container>
        <Switch>
          <Route path={routes.dashboard.onboarding.profile}>
            <OnboardingOrganizationScreen steps={steps} onCloseClick={handleCloseClick} />
          </Route>
          <Route path={routes.dashboard.onboarding.team}>
            <OnboardingTeamScreen steps={steps} onCloseClick={handleCloseClick} />
          </Route>
          <Route path={routes.dashboard.onboarding.theme}>
            <OnboardingThemeScreen steps={steps} onCloseClick={handleCloseClick} />
          </Route>
          <Route path={routes.dashboard.onboarding.event}>
            <OnboardingEventScreen steps={steps} onCloseClick={handleCloseClick} />
          </Route>
          <Redirect to={routes.dashboard.events.list} />
        </Switch>
      </Grid>
    </BackgroundedContainer>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      height: '100%',

      [theme.breakpoints.up('md')]: {
        padding: '72px',
      },
    },
  })();

export type OnboardingScreensProps = Props;
export default OnboardingScreens;
