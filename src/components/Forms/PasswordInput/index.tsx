import { IconButton } from '@material-ui/core';
import { EyeClosedIcon, EyeIcon } from 'components/Icons';
import React, { FC, MouseEvent } from 'react';

import { TextInput } from '..';
import { TextInputProps } from 'components/Forms/TextInput';

interface CustomProps {
  visible: boolean;
  variant?: TextInputProps['variant'];
  onChangeVisibleClick?: () => void;
}

type Props = TextInputProps & CustomProps;

export const PasswordInput: FC<Props> = ({ visible, onChangeVisibleClick, ...props }) => {
  const { value, disabled: isInputDisabled } = props;

  const handleClickShowPassword = (): void => {
    if (onChangeVisibleClick) {
      onChangeVisibleClick();
    }
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextInput
      {...props}
      type={visible ? 'text' : 'password'}
      iconEnd={
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          disabled={isInputDisabled || !value}
        >
          {visible ? <EyeClosedIcon /> : <EyeIcon />}
        </IconButton>
      }
    />
  );
};

export type PasswordInputProps = Props;
export default PasswordInput;
