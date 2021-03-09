import { View } from 'components/Common';
import React, { FC } from 'react';
import { StoryConf } from 'styles';

import DashboardStepper, { DashboardStepperProps } from '.';

const steps = ['first step', 'second step', 'third step'];

const conf: StoryConf<DashboardStepperProps> = {
  title: 'Components/Dashboard/Stepper',
  component: DashboardStepper,
  args: {
    steps,
  },
};

export const Basic: FC<Partial<DashboardStepperProps>> = props => (
  <View column={true} style={{ width: '100%', maxWidth: 1000, padding: 20 }}>
    <DashboardStepper steps={steps} activeStep={0} style={{ marginBottom: 30 }} {...props} />
    <DashboardStepper steps={steps} activeStep={1} style={{ marginBottom: 30 }} {...props} />
    <DashboardStepper steps={steps} activeStep={2} {...props} />
  </View>
);

export default conf;
