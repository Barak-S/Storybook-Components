import { Icon, IconButton } from '@material-ui/core';
import { TextInputProps } from 'components/Forms/TextInput';
import React, { FC, MouseEvent } from 'react';

import { TextInput } from '..';

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

  const iconClassName = visible ? 'lar la-eye-slash' : 'lar la-eye';

  return (
    <TextInput
      {...props}
      type={visible ? 'text' : 'password'}
      iconEnd={
        <IconButton
          tabIndex={-1}
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          disabled={isInputDisabled || !value}
        >
          <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Icon style={{ fontSize: 'inherit' }} className={iconClassName} />
          </span>
        </IconButton>
      }
    />
  );
};

export type PasswordInputProps = Props;
export default PasswordInput;
