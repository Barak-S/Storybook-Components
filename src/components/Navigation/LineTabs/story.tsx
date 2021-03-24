import React, { FC, useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import LineTabs, { LineTabsProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Navigation/LineTabs',
  component: LineTabs,
  args: {
    tabs: [
      { index: 0, label: 'First' },
      { index: 1, label: 'Second' },
      { index: 2, label: 'Third' },
    ],
  },
  argTypes: {},
  parameters: {
    actions: { ...sbAutoDetectActionProps },
    layout: 'centered',
  },
}))();

const LineTabsTemplate: FC<Omit<Props, 'tab' | 'onChange'>> = props => {
  const [tab, setTab] = useState<number>(0);
  return <LineTabs {...props} tab={tab} onChange={(_e, val) => setTab(val)} />;
};

export const Basic: Story<Props> = args => <LineTabsTemplate {...args} />;
