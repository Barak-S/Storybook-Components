import React, { FC, useState } from 'react';
import { StyleProps } from 'styles';

import DashboardFirstEventSetupView from './view';

type Props = StyleProps;

export const DashboardFirstEventSetup: FC<Props> = ({ style }) => {
  const [curStepIndex, setCurStepIndex] = useState<number>(0);
  const steps = ['Profile information', 'Invite team members', 'Select event theme', 'Setup event'];
  const actionBtnTitle = curStepIndex === 0 ? 'Add your first event' : 'Continue Event Setup';

  const handleActionBtnClick = () => {
    if (curStepIndex >= 3) {
      return;
    }
    setCurStepIndex(curStepIndex + 1);
  };

  const handleonIconBtnClick = () => {
    if (curStepIndex >= 3) {
      return;
    }
    setCurStepIndex(curStepIndex + 1);
  };

  return (
    <DashboardFirstEventSetupView
      style={style}
      curStepIndex={curStepIndex}
      steps={steps}
      actionBtnTitle={actionBtnTitle}
      onActionBtnClick={handleActionBtnClick}
      onIconBtnClick={handleonIconBtnClick}
    />
  );
};

export type DashboardFirstEventSetupProps = Props;
export default DashboardFirstEventSetup;
