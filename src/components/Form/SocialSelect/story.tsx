import { action } from '@storybook/addon-actions';
import { SocialType } from 'core/api';
import React, { FC, useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormSocialSelect, { FormSocialSelectProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/SocialSelect',
  component: FormSocialSelect,
  args: {
    title: 'Items',
    label: 'Social Select',
  },
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

const FormSocialSelectTemplate: FC<Omit<Props, 'value' | 'onChange'>> = args => {
  const [value, setValue] = useState<SocialType | undefined>(undefined);
  const handleChange = (val: SocialType | undefined) => {
    setValue(val);
    action('onChange')(val);
  };
  return <FormSocialSelect {...args} value={value} onChange={handleChange} />;
};

export const Default: Story<Props> = args => <FormSocialSelectTemplate {...args} style={{ width: 200 }} />;
