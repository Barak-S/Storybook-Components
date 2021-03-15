import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';
import { StoryMeta, Story } from 'styles';

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

const FormTextInputWrap: FC<Omit<Props, 'value' | 'onChange'>> = props => {
  const [value, setValue] = useState<string>('Value');
  return <FormTextInput value={value} onChange={e => setValue(e.currentTarget.value)} {...props} />;
};

export const Basic: Story<Props> = props => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormTextInputWrap {...props} />
    <FormTextInputWrap {...props} style={{ marginTop: 30 }} iconStart={<LineAwesomeIcon type="user" />} />
  </View>
);

export const Valid: Story<Props> = props => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormTextInputWrap {...props} valid />
    <FormTextInputWrap {...props} style={{ marginTop: 30 }} iconStart={<LineAwesomeIcon type="user" />} valid />
  </View>
);

const helperText = `Some textfield error`;

export const Error: Story<Props> = props => (
  <View column style={{ width: 300 }}>
    <FormTextInputWrap error helperText={helperText} {...props} />
    <FormTextInputWrap
      style={{ marginTop: 30 }}
      error
      helperText={helperText}
      iconStart={<LineAwesomeIcon type="user" />}
      {...props}
    />
  </View>
);
