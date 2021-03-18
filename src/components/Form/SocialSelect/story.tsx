import { action } from '@storybook/addon-actions';
import React, { FC, useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'styles';

import FormSocialSelect, { FormSocialSelectNetworkType, FormSocialSelectProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/SocialSelect',
  component: FormSocialSelect,
  args: {
    title: 'Items',
  },
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

const FormSocialSelectTemplate: FC<Omit<Props, 'value' | 'onChange'>> = args => {
  const [value, setValue] = useState<FormSocialSelectNetworkType | undefined>(undefined);
  const handleChange = (val: FormSocialSelectNetworkType | undefined) => {
    setValue(val);
    action('onChange')(val);
  };
  return <FormSocialSelect {...args} value={value} onChange={handleChange} />;
};

export const Default: Story<Props> = args => <FormSocialSelectTemplate {...args} style={{ width: 200 }} />;
