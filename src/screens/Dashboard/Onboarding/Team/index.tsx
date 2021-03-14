import { ScreenTitle } from 'components/Common';
import { OnboardingContainer, OnboardingStep } from 'components/Onboarding';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  steps: OnboardingStep[];
  onCloseClick?: () => void;
}

export const OnboardingTeamScreen: FC<Props> = ({ steps, onCloseClick }) => {
  return (
    <>
      <ScreenTitle title="Onboarding Team" />
      <OnboardingContainer title="add your teammates" steps={steps} curStepIndex={1} onCloseClick={onCloseClick}>
        <h1>{'TEAM MEMBERS BODY'}</h1>
      </OnboardingContainer>
    </>
  );
};

export default OnboardingTeamScreen;
