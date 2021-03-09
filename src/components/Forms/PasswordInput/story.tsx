import React, { useState, FC } from 'react';
import { action } from '@storybook/addon-actions';

import PasswordInput, { PasswordInputProps as Props } from '.';
import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import { StoryConf, StoryFC } from 'styles';

export default ((): StoryConf<Props> => ({
  title: 'components/Forms/PasswordInput',
  component: PasswordInput,
}))();

const PasswordInputWrap: FC<Omit<Props, 'value' | 'onChange' | 'onChangeVisibleClick' | 'visible'>> = props => {
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

export const Basic: StoryFC<Props> = props => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <PasswordInputWrap style={{ marginBottom: 30 }} label="Password" {...props} />
    <PasswordInputWrap label="Password" iconStart={<LineAwesomeIcon type="lock" />} {...props} />
  </View>
);

export const Valid: StoryFC<Props> = props => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <PasswordInputWrap style={{ marginBottom: 30 }} label="Password" valid={true} {...props} />
    <PasswordInputWrap label="Password" iconStart={<LineAwesomeIcon type="lock" />} valid={true} {...props} />
  </View>
);

export const Error: StoryFC<Props> = props => (
  <View column={true} style={{ width: 300, padding: 20 }}>
    <PasswordInputWrap
      style={{ marginBottom: 30 }}
      label="Password"
      error={true}
      helperText={
        'Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character.'
      }
      {...props}
    />
    <PasswordInputWrap
      label="Password"
      iconStart={<LineAwesomeIcon type="lock" />}
      error={true}
      helperText={
        'Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character.'
      }
      {...props}
    />
  </View>
);
