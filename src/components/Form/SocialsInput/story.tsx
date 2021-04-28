import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import { Social } from 'core/api';
import React, { FC, useState } from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import FormSocialsInput, { FormSocialsInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/SocialsInput',
  component: FormSocialsInput,
  args: {
    style: { width: '100%' },
  },
  parameters: {
    layout: 'centered',
    actions: { ...sbAutoDetectActionProps },
  },
}))();

const FormSocialInputTemplate: FC<Omit<Props, 'onChange'>> = props => {
  const [items, setItems] = useState<Social[]>([]);
  const handleChange = (newItems: Social[]) => {
    setItems(newItems);
    action('onChange')(newItems);
  };
  return <FormSocialsInput {...props} items={items} onChange={handleChange} />;
};

export const Default: Story<Props> = args => (
  <View style={{ width: 600 }}>
    <FormSocialInputTemplate {...args} />
  </View>
);
