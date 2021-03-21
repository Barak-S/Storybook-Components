import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { BackgroundedContainer } from 'components/Layout';
import { OnboardingStep } from 'components/Onboarding';
import React, { FC, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { srollToTop, StyleProps } from 'styles';

import OnboardingEventScreen from './Event';
import OnboardingProfileScreen from './Profile';
import OnboardingTeamScreen from './Team';
import OnboardingThemeScreen from './Theme';

type Props = StyleProps;

const steps: OnboardingStep[] = [
  {
    index: 0,
    title: {
      long: 'Event profile information',
      short: 'Profile information',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    required: true,
    skippable: true,
  },
  {
    index: 1,
    title: 'Invite Team Members',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    required: true,
    skippable: true,
  },
  {
    index: 2,
    title: {
      long: 'Select Event Theme',
      short: 'Event Theme',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    required: true,
    skippable: true,
  },
  {
    index: 3,
    title: {
      long: 'Setup Event',
      short: 'Setup Event',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    required: false,
    skippable: true,
  },
];

export const OnboardingScreens: FC<Props> = () => {
  useEffect(() => {
    srollToTop();
  }, []);

  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();

  const handleCloseOnboardingScreen = () => history.push(routes.dashboard.events);

  return (
    <BackgroundedContainer className={classes.container}>
      <Grid container>
        <Switch>
          <Route path={routes.dashboard.onboarding.event}>
            <OnboardingEventScreen steps={steps} onCloseClick={handleCloseOnboardingScreen} />
          </Route>
          <Route path={routes.dashboard.onboarding.profile}>
            <OnboardingProfileScreen steps={steps} onCloseClick={handleCloseOnboardingScreen} />
          </Route>
          <Route path={routes.dashboard.onboarding.team}>
            <OnboardingTeamScreen steps={steps} onCloseClick={handleCloseOnboardingScreen} />
          </Route>
          <Route path={routes.dashboard.onboarding.theme}>
            <OnboardingThemeScreen steps={steps} onCloseClick={handleCloseOnboardingScreen} />
          </Route>
          <Redirect to={routes.dashboard.events} />
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
