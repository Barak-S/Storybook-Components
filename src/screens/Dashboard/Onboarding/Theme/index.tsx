import { ScreenTitle } from 'components/Common';
import { SetupContainer, SetupStep } from 'components/Setup';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingThemeScreen: FC<Props> = ({ steps, onCloseClick }) => {
  return (
    <>
      <ScreenTitle title="Onboarding Theme" />
      <SetupContainer title="add theme of your event" steps={steps} curStepIndex={2} onCloseClick={onCloseClick}>
        <h1>{'EVENT THEME BODY'}</h1>
      </SetupContainer>
    </>
  );
};

export default OnboardingThemeScreen;
