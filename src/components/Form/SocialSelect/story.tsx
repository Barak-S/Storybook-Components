import React, { FC, useState } from 'react';
import { Story, StoryMeta } from 'styles';
import { action } from '@storybook/addon-actions';

import FormSocialSelect, { FormSocialSelectNetworkType, FormSocialSelectProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/SocialSelect',
  component: FormSocialSelect,
  args: {
    title: 'Items',
  },
  parameters: {
    layout: 'centered',
  },
}))();

const FormSocialSelectTemplate: FC<Omit<Props, 'value' | 'onChange'>> = props => {
  const [value, setValue] = useState<FormSocialSelectNetworkType | undefined>(undefined);
  const handleChange = (val: FormSocialSelectNetworkType | undefined) => {
    setValue(val);
    action('onChange')(val);
  };
  return <FormSocialSelect {...props} value={value} onChange={handleChange} />;
};

export const Default: Story<Props> = args => <FormSocialSelectTemplate {...args} style={{ width: 200 }} />;
