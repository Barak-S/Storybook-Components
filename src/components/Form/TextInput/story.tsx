import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';
import { StoryMeta, Story } from 'utils';

import FormTextInput, { FormTextInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/TextInput',
  component: FormTextInput,
  args: {
    label: 'Input label',
  },
  parameters: {
    layout: 'centered',
  },
}))();

const FormTextInputTemplate: FC<Omit<Props, 'value' | 'onChange'>> = args => {
  const [value, setValue] = useState<string>('Value');
  return <FormTextInput value={value} onChange={e => setValue(e.currentTarget.value)} {...args} />;
};

export const Basic: Story<Props> = args => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormTextInputTemplate {...args} />
    <FormTextInputTemplate {...args} style={{ marginTop: 30 }} iconStart={<LineAwesomeIcon type="user" />} />
  </View>
);

export const Valid: Story<Props> = args => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormTextInputTemplate {...args} valid />
    <FormTextInputTemplate {...args} style={{ marginTop: 30 }} iconStart={<LineAwesomeIcon type="user" />} valid />
  </View>
);

const helperText = `Some textfield error`;

export const Error: Story<Props> = args => (
  <View column style={{ width: 300 }}>
    <FormTextInputTemplate error helperText={helperText} {...args} />
    <FormTextInputTemplate
      style={{ marginTop: 30 }}
      error
      helperText={helperText}
      iconStart={<LineAwesomeIcon type="user" />}
      {...args}
    />
  </View>
);
