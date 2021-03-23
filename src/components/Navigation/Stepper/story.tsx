import React from 'react';
import { sbChromaticDefViewports, sbStyles, Story, StoryMeta } from 'utils';

import Stepper, { StepperProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Navigation/Stepper',
  component: Stepper,
  args: {
    steps: ['First step', 'Second step', 'Third step'],
  },
  parameters: {
    chromatic: { ...sbChromaticDefViewports },
  },
}))();

export const Basic: Story<Props> = args => (
  <>
    <Stepper {...args} activeStep={0} style={sbStyles.mb30} />
    <Stepper {...args} activeStep={1} style={sbStyles.mb30} />
    <Stepper {...args} activeStep={2} />
  </>
);
