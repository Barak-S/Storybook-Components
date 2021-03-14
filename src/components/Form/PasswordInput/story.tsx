import React, { useState, FC } from 'react';
import { action } from '@storybook/addon-actions';

import FormPasswordInput, { FormPasswordInputProps as Props } from '.';
import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import { StoryMeta, Story } from 'styles';

export default ((): StoryMeta<Props> => ({
  title: 'components/Form/PasswordInput',
  component: FormPasswordInput,
}))();

const FormPasswordInputWrap: FC<Omit<Props, 'value' | 'onChange' | 'onChangeVisibleClick' | 'visible'>> = props => {
  const [value, setValue] = useState<string>('12345678');
  const [visible, setVisible] = useState<boolean>(false);

  const handleChangeVisibleClick = () => {
    action('onChangeVisibleClick')();
    setVisible(!visible);
  };

  return (
    <FormPasswordInput
      value={value}
      visible={visible}
      onChange={event => setValue(event.currentTarget.value)}
      onChangeVisibleClick={handleChangeVisibleClick}
      {...props}
    />
  );
};

export const Basic: Story<Props> = props => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormPasswordInputWrap style={{ marginBottom: 30 }} label="Password" {...props} />
    <FormPasswordInputWrap label="Password" iconStart={<LineAwesomeIcon type="lock" />} {...props} />
  </View>
);

export const Valid: Story<Props> = props => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormPasswordInputWrap style={{ marginBottom: 30 }} label="Password" valid {...props} />
    <FormPasswordInputWrap label="Password" iconStart={<LineAwesomeIcon type="lock" />} valid {...props} />
  </View>
);

export const Error: Story<Props> = props => (
  <View column style={{ width: 300, padding: 20 }}>
    <FormPasswordInputWrap
      style={{ marginBottom: 30 }}
      label="Password"
      error
      helperText="Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character."
      {...props}
    />
    <FormPasswordInputWrap
      label="Password"
      iconStart={<LineAwesomeIcon type="lock" />}
      error
      helperText="Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character."
      {...props}
    />
  </View>
);
