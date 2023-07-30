import React, { FC, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormCountryInput, { FormCountryInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/CountryInput',
  component: FormCountryInput,
  args: {
    style: { width: 300 },
  },
  parameters: {
    actions: { ...sbAutoDetectActionProps },
    layout: 'centered',
  },
}))();

const FormCountryInputTemplate: FC<Props> = ({ value: initValue, ...props }) => {
  const [value, setValue] = useState<string | undefined>(initValue);
  const handleChange = (value?: string) => {
    setValue(value);
    action('onChange')(value);
  };
  return <FormCountryInput {...props} value={value} onChange={handleChange} />;
};

export const Basic: Story<Props> = args => <FormCountryInputTemplate {...args} />;

export const Prefilled: Story<Props> = args => <FormCountryInputTemplate {...args} />;

Prefilled.args = {
  value: 'Unites States',
};
