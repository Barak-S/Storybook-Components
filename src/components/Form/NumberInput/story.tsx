import React, { FC, useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';
import { action } from '@storybook/addon-actions';

import FormNumberInput, { FormNumberInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/NumberInput',
  component: FormNumberInput,
  args: {
    min: 0,
    max: 100,
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

const FormNumberInputTemplate: FC<Omit<Props, 'onChange'>> = ({ value: initValue, ...props }) => {
  const [value, setValue] = useState<number>(initValue || 0);

  const handleChange = (newValue: number) => {
    action('onChange')(newValue);
    setValue(newValue);
  };

  return <FormNumberInput {...props} value={value} onChange={handleChange} />;
};

export const Basic: Story<Props> = args => <FormNumberInputTemplate {...args} />;
