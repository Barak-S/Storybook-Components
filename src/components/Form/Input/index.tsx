import { FormHelperText, Input, InputAdornment, InputProps, makeStyles } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mc, ms, Styles } from 'styles';
import { getTestIdProps, TestIdProps } from 'utils';

interface Props extends InputProps, TestIdProps {
  startIcon?: LineAwesomeIconType;
  helperText?: string;
}

export const FormInput: FC<Props> = ({ startIcon, className, testID, style, inputProps, error, helperText, ...props }) => {
  const renderStarAdornment = () => {
    if (!startIcon) return undefined;
    return (
      <InputAdornment style={ms(styles.startAdornment)} position="start">
        <LineAwesomeIcon type={startIcon} style={ms(styles.adornmentIcon, error && styles.adornmentIconError)} />
      </InputAdornment>
    );
  };

  const inputStyle = ms(styles.input, startIcon && styles.inputWithStartAdornment, error && styles.inputError);
  const classes = useClasses();

  return (
    <>
      <Input
        className={mc(classes.container, error && classes.containerError, className)}
        style={ms(styles.container, style)}
        startAdornment={renderStarAdornment()}
        error={error}
        inputProps={inputProps ? { ...inputProps, style: inputStyle } : { style: inputStyle }}
        {...getTestIdProps(testID, 'input')}
        {...props}
      />
      {!!helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </>
  );
};

const useClasses = makeStyles({
  container: {
    '& input::placeholder': {
      fontSize: '16px',
      color: colors.brownishGrey,
      opacity: 1,
    },
  },
  containerError: {
    '& input::placeholder': {
      color: colors.error,
    },
  },
});

const styles: Styles = {
  container: {},
  input: {},
  startAdornment: {
    position: 'absolute',
    left: 0,
    top: 0,
    border: 'none',
    background: 'transparent',
  },
  adornmentError: {},
  adornmentIcon: {
    color: colors.greyish,
  },
  adornmentIconError: {
    color: colors.red,
  },
  inputError: {
    borderColor: colors.red,
  },
  inputWithStartAdornment: {
    paddingLeft: 50,
  },
};

export type FormInputProps = Props;
export default FormInput;
