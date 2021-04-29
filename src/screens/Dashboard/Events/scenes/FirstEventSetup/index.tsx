import { onboardignSetupSteps } from 'components/Setup';
import { UserSettingsOnboarding } from 'core/api';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { routes } from 'screens/consts';
import { useSelector } from 'store';
import { StyleProps } from 'styles';
import { isStr } from 'utils';

import DashboardFirstEventSetupView from './view';

type Props = StyleProps;

const onboardingToCurStepIndex = (val: UserSettingsOnboarding): number => {
  switch (val) {
    case 'profile':
      return 0;
    case 'team':
      return 1;
    case 'theme':
      return 2;
    case 'event':
      return 3;
    case 'done':
      return 4;
  }
};

export const DashboardFirstEventSetup: FC<Props> = ({ style }) => {
  const history = useHistory();
  const onboarding = useSelector(s => s.user.settings.onboarding) || 'profile';
  const curStepIndex = onboardingToCurStepIndex(onboarding);
  const steps = onboardignSetupSteps.map(itm => (isStr(itm.title) ? itm.title : itm.title.short));
  const actionBtnTitle = curStepIndex === 0 ? 'Add your first event' : 'Continue Event Setup';

  const handleGoToStepClick = () => {
    switch (onboarding) {
      case 'profile':
        return history.push(routes.dashboard.onboarding.profile);
      case 'team':
        return history.push(routes.dashboard.onboarding.team);
      case 'theme':
        return history.push(routes.dashboard.onboarding.theme);
      case 'event':
        return history.push(routes.dashboard.onboarding.event);
      case 'done':
        return history.push(routes.dashboard.events);
    }
  };

  return (
    <DashboardFirstEventSetupView
      style={style}
      curStepIndex={curStepIndex}
      steps={steps}
      actionBtnTitle={actionBtnTitle}
      onActionBtnClick={handleGoToStepClick}
      onIconBtnClick={handleGoToStepClick}
    />
  );
};

export type DashboardFirstEventSetupProps = Props;
export default DashboardFirstEventSetup;
