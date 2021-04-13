import { Grid } from '@material-ui/core';
import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupStep } from 'components/Setup';
import React, { FC } from 'react';
import { StyleProps, Styles } from 'styles';
import ThemeAccordion from './components/ThemeAccordion';

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingThemeScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const styles = getStyles();

  return (
    <>
      <ScreenTitle title="Onboarding Theme" />
      <SetupContainer title="add theme of your event" steps={steps} curStepIndex={2} onCloseClick={onCloseClick}>
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
