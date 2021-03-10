import { View } from 'components/Common';
import React, { FC } from 'react';
import { StoryMeta } from 'styles';

import DashboardStepper, { DashboardStepperProps as Props } from '.';

const steps = ['first step', 'second step', 'third step'];

export default ((): StoryMeta<Props> => ({
  title: 'components/Dashboard/Stepper',
  component: DashboardStepper,
  args: {
    steps,
  },
}))();

export const Basic: FC<Partial<Props>> = props => (
  <View column={true} style={{ width: '100%', maxWidth: 1000, padding: 20 }}>
    <DashboardStepper steps={steps} activeStep={0} style={{ marginBottom: 30 }} {...props} />
    <DashboardStepper steps={steps} activeStep={1} style={{ marginBottom: 30 }} {...props} />
    <DashboardStepper steps={steps} activeStep={2} {...props} />
  </View>
);
