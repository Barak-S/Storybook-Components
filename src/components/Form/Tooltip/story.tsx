import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormTooltip, { FormTooltipProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/Tooltip',
  component: FormTooltip,
  args: {
    title: 'Tooltip',
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

export const Basic: Story<Props> = args => <FormTooltip {...args} />;
