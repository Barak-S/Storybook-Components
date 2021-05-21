import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import PaywallPlans, { PaywallPlansProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Paywall/Plans',
  component: PaywallPlans,
  args: {},
  argTypes: {},
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <PaywallPlans {...args} />;
