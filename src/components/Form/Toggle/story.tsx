import React, { FC, useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';
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

const FormToggleWrap: FC<Omit<Props, 'value' | 'onChange'>> = props => {
  const [value, setValue] = useState<boolean>(false);

  const handleChange = (v: boolean) => {
    action('onChange')(v);
    setValue(v);
  };

  return <FormToggle {...props} value={value} onChange={handleChange} />;
};

export const Basic: Story<Props> = props => <FormToggleWrap {...props} />;
