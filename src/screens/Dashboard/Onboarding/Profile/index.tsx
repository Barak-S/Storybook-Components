import { ScreenTitle } from 'components/Screen';
import { SetupContainer, SetupStep } from 'components/Setup';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { routes } from 'screens/consts';
import { scrollToTop, StyleProps } from 'styles';

import OnboardingProfileScreenForm from './components/Form';

interface Props extends StyleProps {
  steps: SetupStep[];
  onCloseClick?: () => void;
}

export const OnboardingProfileScreen: FC<Props> = ({ steps, onCloseClick }) => {
  const history = useHistory();

  const handleFooterBtnClick = () => {
    history.push(routes.dashboard.onboarding.team);
    scrollToTop();
  };

  return (
    <>
      <ScreenTitle title="Onboarding Profile" />
      <SetupContainer
        title="Add your profile information"
        steps={steps}
        curStepIndex={0}
        onCloseClick={onCloseClick}
        onFooterBtnClick={handleFooterBtnClick}
      >
        <OnboardingProfileScreenForm />
      </SetupContainer>
    </>
  );
};

export default OnboardingProfileScreen;
