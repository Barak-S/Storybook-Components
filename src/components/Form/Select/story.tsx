import { action } from '@storybook/addon-actions';
import React, { FC, useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';

import FormSelect, { FormSelectOption as Option, FormSelectProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/Select',
  component: FormSelect,
  args: {
    title: 'Items',
    placeholder: 'Placeholder',
    options: [
      { value: 0, label: 'item1' },
      { value: 1, label: 'item2' },
    ],
  },
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

const FormSelectTemplate: FC<Omit<Props, 'value' | 'onChange'>> = args => {
  const [value, setValue] = useState<Option | undefined>(undefined);
  const handleChane = (val: Option | undefined) => {
    setValue(val);
    action('onChange')(val);
  };
  return <FormSelect {...args} value={value} onChange={handleChane} />;
};

export const Base: Story<Props> = args => <FormSelectTemplate {...args} />;
