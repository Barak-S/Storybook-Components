import { IconButton } from '@material-ui/core';
import { EyeClosedIcon, EyeIcon } from 'components/Icons';
import React, { MouseEvent } from 'react';

import { TextInput } from '..';
import { TextInputProps } from '../TextInput/types';

interface PasswordInputProps {
  isPasswordVisible: boolean;
  onShowPasswordClick: () => void;
}

type Props = TextInputProps & PasswordInputProps;

export const PasswordInput = ({ onShowPasswordClick, isPasswordVisible, ...props }: Props) => {
  const { value, disabled: isInputDisabled } = props;

  const handleClickShowPassword = (): void => {
    onShowPasswordClick();
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextInput
      {...props}
      type={isPasswordVisible ? 'text' : 'password'}
      iconEnd={
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          disabled={isInputDisabled || !value}
        >
          {isPasswordVisible ? <EyeClosedIcon /> : <EyeIcon />}
        </IconButton>
      }
    />
  );
};

export default PasswordInput;
