import { View } from 'components/Common';
import React, { useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormTextArea, { FormTextAreaProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/TextArea',
  component: FormTextArea,
  args: {
    defaultValue:
      'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Nostrum, vero, modi. Reprehenderit, nihil. Ab praesentium ipsum doloremque maxime, adipisci, obcaecati!',
    label: 'Type your message',
  },
  parameters: {
    actions: { ...sbAutoDetectActionProps },
    layout: 'centered',
  },
}))();

export const Basic: Story<Props> = args => {
  const [value, setValue] = useState<string>(String(args.defaultValue));

  return (
    <View style={{ width: 1140 }}>
      <FormTextArea {...args} onChange={e => setValue(e.currentTarget.value)} value={value} />
    </View>
  );
};
