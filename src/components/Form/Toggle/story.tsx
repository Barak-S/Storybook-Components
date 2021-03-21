import React, { FC, useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';
import { action } from '@storybook/addon-actions';

import FormToggle, { FormToggleProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/Toggle',
  component: FormToggle,
  args: {
    title: 'Toggle',
  },
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

const FormToggleTemplate: FC<Omit<Props, 'value' | 'onChange'>> = args => {
  const [value, setValue] = useState<boolean>(false);

  const handleChange = (val: boolean) => {
    action('onChange')(val);
    setValue(val);
  };

  return <FormToggle {...args} value={value} onChange={handleChange} />;
};

export const Basic: Story<Props> = args => <FormToggleTemplate {...args} />;
