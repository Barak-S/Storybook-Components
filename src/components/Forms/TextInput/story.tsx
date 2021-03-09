import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';
import { StoryConf, StoryFC } from 'styles';

import TextInput, { TextInputProps as Props } from '.';

export default ((): StoryConf<Props> => ({
  title: 'components/Forms/TextInput',
  component: TextInput,
}))();

const TextInputWrap: FC<Omit<Props, 'value' | 'onChange'>> = props => {
  const [value, setValue] = useState<string>('Value');
  return <TextInput value={value} onChange={e => setValue(e.currentTarget.value)} {...props} />;
};

export const Basic: StoryFC<Props> = props => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <TextInputWrap style={{ marginBottom: 30 }} label="input label" {...props} />
    <TextInputWrap label="Input label" iconStart={<LineAwesomeIcon type="user" />} {...props} />
  </View>
);

export const Valid: StoryFC<Props> = props => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <TextInputWrap style={{ marginBottom: 30 }} label="input label" valid={true} {...props} />
    <TextInputWrap label="Input label" iconStart={<LineAwesomeIcon type="user" />} valid={true} {...props} />
  </View>
);

export const Error: StoryFC<Props> = props => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <TextInputWrap
      style={{ marginBottom: 30 }}
      label="input label"
      error={true}
      helperText={
        'Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character.'
      }
      {...props}
    />
    <TextInputWrap
      label="Input label"
      error={true}
      helperText={
        'Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character.'
      }
      iconStart={<LineAwesomeIcon type="user" />}
      {...props}
    />
  </View>
);
