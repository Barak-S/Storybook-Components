import React from 'react';

import DashboardStepper from '.';
import { View } from 'components/Common';

export default {
  title: 'Components/Dashboard/DashboardStepper',
  component: DashboardStepper,
};

export const Basic = () => {
  const steps = ['first step', 'second step', 'third step'];

  return (
    <View column={true} style={{ width: '100%', maxWidth: 1000, padding: 20 }}>
      <DashboardStepper steps={steps} activeStep={0} style={{ marginBottom: 30 }} />
      <DashboardStepper steps={steps} activeStep={1} style={{ marginBottom: 30 }} />
      <DashboardStepper steps={steps} activeStep={2} />
    </View>
  );
};
