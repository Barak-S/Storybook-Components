import { ScreenTitle } from 'components/Common';
import { OnboardingContainer, OnboardingStep } from 'components/Onboarding';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  steps: OnboardingStep[];
  onCloseClick?: () => void;
}

export const OnboardingThemeScreen: FC<Props> = ({ steps, onCloseClick }) => {
  return (
    <>
      <ScreenTitle title="Onboarding Theme" />
      <OnboardingContainer title="add theme of your event" steps={steps} curStepIndex={2} onCloseClick={onCloseClick}>
        <h1>{'EVENT THEME BODY'}</h1>
      </OnboardingContainer>
    </>
  );
};

export default OnboardingThemeScreen;
