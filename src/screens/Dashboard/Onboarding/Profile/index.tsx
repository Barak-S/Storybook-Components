import { ScreenTitle } from 'components/Common';
import { OnboardingContainer, OnboardingStep } from 'components/Onboarding';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  steps: OnboardingStep[];
  onCloseClick?: () => void;
}

export const OnboardingProfileScreen: FC<Props> = ({ steps, onCloseClick }) => {
  return (
    <>
      <ScreenTitle title="Onboarding Profile" />
      <OnboardingContainer title="add your profile information" steps={steps} curStepIndex={0} onCloseClick={onCloseClick}>
        <h1>{'PROFILE INFORMATION BODY'}</h1>
      </OnboardingContainer>
    </>
  );
};

export default OnboardingProfileScreen;
