import { ScreenTitle } from 'components/Common';
import { OnboardingContainer, OnboardingStep } from 'components/Onboarding';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  steps: OnboardingStep[];
  onCloseClick?: () => void;
}

export const OnboardingEventScreen: FC<Props> = ({ steps, onCloseClick }) => {
  return (
    <>
      <ScreenTitle title="Onboarding Event" />
      <OnboardingContainer title="Setup your awesome event" steps={steps} curStepIndex={3} onCloseClick={onCloseClick}>
        <h1>{'SETUP EVENT BODY'}</h1>
      </OnboardingContainer>
    </>
  );
};

export default OnboardingEventScreen;
