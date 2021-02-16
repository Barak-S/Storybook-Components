import React, { useState, FC } from 'react';
import { action } from '@storybook/addon-actions';

import PasswordInput, { PasswordInputProps } from '.';
import { View } from 'components/Common';
import { LockIcon } from 'components/Icons';

export default {
  title: 'Components/Forms/PasswordInput',
  component: PasswordInput,
};

const PasswordInputWrap: FC<
  Omit<PasswordInputProps, 'value' | 'onChange' | 'onChangeVisibleClick' | 'visible'>
> = props => {
  const [value, setValue] = useState<string>('12345678');
  const [visible, setVisible] = useState<boolean>(false);

  const handleChangeVisibleClick = () => {
    action('onChangeVisibleClick')();
    setVisible(!visible);
  };

  return (
    <PasswordInput
      value={value}
      visible={visible}
      onChange={event => setValue(event.currentTarget.value)}
      onChangeVisibleClick={handleChangeVisibleClick}
      {...props}
    />
  );
};

export const Basic = () => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <PasswordInputWrap style={{ marginBottom: 30 }} label="Password" />
    <PasswordInputWrap label="Password" iconStart={<LockIcon />} />
  </View>
);

export const Valid = () => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <PasswordInputWrap style={{ marginBottom: 30 }} label="Password" valid={true} />
    <PasswordInputWrap label="Password" iconStart={<LockIcon />} valid={true} />
  </View>
);

export const Error = () => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <PasswordInputWrap
      style={{ marginBottom: 30 }}
      label="Password"
      error={true}
      helperText={
        'Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character.'
      }
    />
    <PasswordInputWrap
      label="Password"
      iconStart={<LockIcon />}
      error={true}
      helperText={
        'Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character.'
      }
    />
  </View>
);
