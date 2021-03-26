import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupStep } from 'components/Setup';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingProfileScreen: FC<Props> = ({ steps, onCloseClick }) => {
  return (
    <>
      <ScreenTitle title="Onboarding Profile" />
      <SetupContainer title="add your profile information" steps={steps} curStepIndex={0} onCloseClick={onCloseClick}>
        <h1>{'PROFILE INFORMATION BODY'}</h1>
      </SetupContainer>
    </>
  );
};

export default OnboardingProfileScreen;
