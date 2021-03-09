import { action } from '@storybook/addon-actions';
import React, { FC, useState } from 'react';
import { StoryConf } from 'styles';

import DashboardFirstEventSetup, { DashboardFirstEventSetupProps } from '.';

const steps = ['profile information', 'invite team members', 'select event theme', 'setup event'];

const conf: StoryConf<DashboardFirstEventSetupProps> = {
  title: 'screens/Dashboard/Events/scenes/FirstEventSetup',
  component: DashboardFirstEventSetup,
  args: { steps },
};

export const Basic: FC<Partial<DashboardFirstEventSetupProps>> = props => (
  <DashboardFirstEventSetup
    steps={steps}
    onActionBtnClick={action('onActionBtnClick')}
    onIconBtnClick={action('onIconBtnClick')}
    {...props}
  />
);

export const Demo: FC<Partial<DashboardFirstEventSetupProps>> = props => {
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
    action('onActionBtnClick')();
  };

  return (
    <DashboardFirstEventSetup
      steps={steps}
      curStepIndex={step}
      actionBtnTitle={actionButtonTitle[step]}
      onActionBtnClick={handleActionButtonClick}
      onIconBtnClick={action('onIconBtnClick')}
      {...props}
    />
  );
};

export default conf;
