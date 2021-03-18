import { View } from 'components/Common';
import React from 'react';
import { Story, StoryMeta } from 'styles';

import DashboardStepper, { DashboardStepperProps as Props } from '.';

const steps = ['first step', 'second step', 'third step'];

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/Stepper',
  component: DashboardStepper,
  args: {
    steps,
  },
}))();

export const Basic: Story<Props> = args => (
  <View column style={{ width: '100%', maxWidth: 1000, padding: 20 }}>
    <DashboardStepper {...args} steps={steps} activeStep={0} style={{ marginBottom: 30 }} />
    <DashboardStepper {...args} steps={steps} activeStep={1} style={{ marginBottom: 30 }} />
    <DashboardStepper {...args} steps={steps} activeStep={2} />
  </View>
);
