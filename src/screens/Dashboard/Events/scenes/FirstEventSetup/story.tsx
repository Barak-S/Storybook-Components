import { action } from '@storybook/addon-actions';
import React, { FC, useState } from 'react';

import FirstEventSetup, { FirstEventSetupProps } from '.';

export default {
  title: 'screens/Dashboard/Events/scenes/FirstEventSetup',
  component: FirstEventSetup,
};

export const Basic: FC<FirstEventSetupProps> = () => {
  const [step, setStep] = useState<number>(0);
  const steps = ['profile information', 'invite team members', 'select event theme', 'setup event'];
  const actionButtonTitle = [
    'Add your first event',
    'Continue Event Setup',
    'Continue Event Step3',
    'Continue Event Step4',
  ];

  const handleActionButtonClick = () => {
    const currentStep = step >= steps.length - 1 ? 0 : step + 1;
    setStep(currentStep);
    action('onActionBtnClick');
  };

  return (
    <FirstEventSetup
      onActionBtnClick={handleActionButtonClick}
      onIconBtnClick={action('onIconBtnClick')}
      steps={steps}
      curStepIndex={step}
      actionBtnTitle={actionButtonTitle[step]}
    />
  );
};
