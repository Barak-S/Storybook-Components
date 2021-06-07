import React, { FC, useState, useEffect } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';
import { action } from '@storybook/addon-actions';

import FormColorPicker, { FormColorPickerProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/ColorPicker',
  component: FormColorPicker,
  args: {
    title: 'background',
    value: '#ffffff',
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

const FormColorPickerTemplate: FC<Omit<Props, 'onChange'>> = ({ value: inValue, ...props }) => {
  const [value, setValue] = useState<string>(inValue || '#000');
  useEffect(() => {
    if (inValue) setValue(inValue);
  }, [inValue]);
  const handleChange = (newColor: string) => {
    action('onChange')(newColor);
    setValue(newColor);
  };
  return <FormColorPicker {...props} value={value} onChange={handleChange} />;
};

export const Basic: Story<Props> = args => <FormColorPickerTemplate {...args} />;
