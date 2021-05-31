import React, { FC, useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import EventBasicCreateFrom, { EventBasicCreateFromData as FormData, EventBasicCreateFromProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Event/BasicCreateForm',
  component: EventBasicCreateFrom,
  args: {},
  parameters: {
    layout: 'padded',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

const EventBasicCreateFromTemplate: FC<Omit<Props, 'onChange'>> = ({ data: initData, ...props }) => {
  const [data, setData] = useState<FormData | undefined>(initData ? initData : undefined);
  return <EventBasicCreateFrom {...props} data={data} onChange={setData} />;
};

export const Basic: Story<Props> = args => <EventBasicCreateFromTemplate {...args} />;
