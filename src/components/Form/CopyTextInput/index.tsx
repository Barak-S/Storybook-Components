import { Button, Grid, makeStyles, TextField, TextFieldProps, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { colors, mc, mx, StyleProps } from 'styles';

interface CustomProps extends StyleProps {
  url: string;
  onCopyClick?: (url: string) => void;
}

type Props = TextFieldProps & CustomProps;

export const FormCopyTextInput: FC<Props> = ({ url, onCopyClick, className, value, ...props }) => {
  const handleCopyClick = () => {
    if (onCopyClick) {
      onCopyClick(String(value));
    }
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid className={mc(classes.container, className)}>
      <TextField {...props} value={url} className={classes.input} />
      <Button className={classes.button} onClick={handleCopyClick}>
        {'copy'}
      </Button>
    </Grid>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 12,
      ...mx.border(1, 'solid', colors.brownishGrey),
    },
    input: {
      width: '100%',
      '& .MuiInputBase-input': {
        height: 46,
        fontSize: 16,
        color: colors.blackTwo,
        background: colors.white,
        paddingRight: 80,
        [theme.breakpoints.up('lg')]: {
          paddingRight: 95,
          height: 52,
          fontSize: 19,
        },
      },
      '& .MuiInputBase-root.Mui-focused .MuiInputBase-input': {
        border: 'none',
      },
    },
    button: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 70,
      height: 46,
      fontSize: 16,
      background: colors.veryLightPinkThree,
      color: colors.blackTwo,
      padding: '0 10px',
      borderRadius: 0,
      fontWeight: 'normal',
      ...mx.centeredContent(),
      [theme.breakpoints.up('lg')]: {
        padding: '0 24px',
        height: 52,
        fontSize: 19,
        width: 85,
      },
    },
  })();

export default FormCopyTextInput;
