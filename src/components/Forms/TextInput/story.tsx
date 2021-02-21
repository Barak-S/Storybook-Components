import { View } from 'components/Common';
import { Icon } from 'components/Icons';
import React, { FC, useState } from 'react';

import TextInput, { TextInputProps } from '.';

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
};

const TextInputWrap: FC<Omit<TextInputProps, 'value' | 'onChange'>> = props => {
  const [value, setValue] = useState<string>('Value');
  return <TextInput value={value} onChange={e => setValue(e.currentTarget.value)} {...props} />;
};

export const Basic = () => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <TextInputWrap style={{ marginBottom: 30 }} label="input label" />
    <TextInputWrap
      label="Input label"
      iconStart={<Icon className="las la-user" style={{ transform: 'scale(1.5)' }} />}
    />
  </View>
);

export const Valid = () => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <TextInputWrap style={{ marginBottom: 30 }} label="input label" valid={true} />
    <TextInputWrap
      label="Input label"
      iconStart={<Icon className="las la-user" style={{ transform: 'scale(1.5)' }} />}
      valid={true}
    />
  </View>
);

export const Error = () => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <TextInputWrap
      style={{ marginBottom: 30 }}
      label="input label"
      error={true}
      helperText={
        'Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character.'
      }
    />
    <TextInputWrap
      label="Input label"
      error={true}
      helperText={
        'Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character.'
      }
      iconStart={<Icon className="las la-user" style={{ transform: 'scale(1.5)' }} />}
    />
  </View>
);
