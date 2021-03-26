import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupStep } from 'components/Setup';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingEventScreen: FC<Props> = ({ steps, onCloseClick }) => {
  return (
    <>
      <ScreenTitle title="Onboarding Event" />
      <SetupContainer title="Setup your awesome event" steps={steps} curStepIndex={3} onCloseClick={onCloseClick}>
        <h1>{'SETUP EVENT BODY'}</h1>
      </SetupContainer>
    </>
  );
};

export default OnboardingEventScreen;
