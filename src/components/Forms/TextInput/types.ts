import { TextFieldProps } from '@material-ui/core';
import { ReactNode } from 'react';

interface InputProps {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

export type TextInputProps = TextFieldProps & InputProps;
