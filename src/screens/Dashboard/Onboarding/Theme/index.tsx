import { Grid } from '@material-ui/core';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupStep } from 'components/Setup';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { routes } from 'screens/consts';
import { scrollToTop, StyleProps, Styles } from 'styles';

import ThemeAccordion from './components/ThemeAccordion';

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingThemeScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const styles = getStyles();
  const history = useHistory();

  const handleFooterBtnClick = () => {
    history.push(routes.dashboard.onboarding.event);
    scrollToTop();
  };

  return (
    <>
      <ScreenTitle title="Onboarding Theme" />
      <SetupContainer
        title="add theme of your event"
        steps={steps}
        curStepIndex={2}
        onCloseClick={onCloseClick}
        onFooterBtnClick={handleFooterBtnClick}
      >
        <Grid style={styles.container}>
          <ThemeAccordion />
        </Grid>
      </SetupContainer>
    </>
  );
};

const getStyles = (): Styles => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '25px 0 33px',
  },
});

export default OnboardingThemeScreen;
