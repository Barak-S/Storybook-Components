import { Icon, IconButton } from '@material-ui/core';
import FormTextInput, { FormTextInputProps } from '../TextInput';
import React, { FC, MouseEvent } from 'react';

interface CustomProps {
  visible: boolean;
  variant?: FormTextInputProps['variant'];
  onChangeVisibleClick?: () => void;
}

type Props = FormTextInputProps & CustomProps;

export const FormPasswordInput: FC<Props> = ({ visible, onChangeVisibleClick, ...props }) => {
  const { value, disabled: isInputDisabled } = props;

  const handleClickShowPassword = (): void => {
    if (onChangeVisibleClick) {
      onChangeVisibleClick();
    }
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const iconClassName = visible ? 'lar la-eye' : 'lar la-eye-slash';

  return (
    <FormTextInput
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

export type FormPasswordInputProps = Props;
export default FormPasswordInput;
