import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import DashboardFirstEventSetupView, { DashboardFirstEventSetupViewProps as Props } from './view';

const steps = ['profile information', 'invite team members', 'select event theme', 'setup event'];

export default ((): StoryMeta<Props> => ({
  title: 'screens/Dashboard/Events/scenes/FirstEventSetup',
  component: DashboardFirstEventSetupView,
  args: { steps },
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <DashboardFirstEventSetupView {...args} steps={steps} />;

export const Demo: Story<Props> = args => {
  const [step, setStep] = useState<number>(0);
  const steps = ['profile information', 'invite team members', 'select event theme', 'setup event'];
  const actionButtonTitle = ['Add your first event', 'Continue Event Setup', 'Continue Event Step3', 'Continue Event Step4'];

  const handleActionButtonClick = () => {
    const currentStep = step >= steps.length - 1 ? 0 : step + 1;
    setStep(currentStep);
    action('onActionBtnClick')();
  };

  return (
    <DashboardFirstEventSetupView
      {...args}
      steps={steps}
      curStepIndex={step}
      actionBtnTitle={actionButtonTitle[step]}
      onActionBtnClick={handleActionButtonClick}
    />
  );
};
