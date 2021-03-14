import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';
import { StoryMeta, Story } from 'styles';

import FormTextInput, { FormTextInputProps as Props } from '.';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/TextInput',
  component: FormTextInput,
}))();

const FormTextInputWrap: FC<Omit<Props, 'value' | 'onChange'>> = props => {
  const [value, setValue] = useState<string>('Value');
  return <FormTextInput value={value} onChange={e => setValue(e.currentTarget.value)} {...props} />;
};

export const Basic: Story<Props> = props => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormTextInputWrap style={{ marginBottom: 30 }} label="input label" {...props} />
    <FormTextInputWrap label="Input label" iconStart={<LineAwesomeIcon type="user" />} {...props} />
  </View>
);

export const Valid: Story<Props> = props => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormTextInputWrap style={{ marginBottom: 30 }} label="input label" valid {...props} />
    <FormTextInputWrap label="Input label" iconStart={<LineAwesomeIcon type="user" />} valid {...props} />
  </View>
);

export const Error: Story<Props> = props => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormTextInputWrap
      style={{ marginBottom: 30 }}
      label="input label"
      error
      helperText="Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character."
      {...props}
    />
    <FormTextInputWrap
      label="Input label"
      error
      helperText="Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character."
      iconStart={<LineAwesomeIcon type="user" />}
      {...props}
    />
  </View>
);
