import { FormHelperText, makeStyles, TextareaAutosize, TextareaAutosizeProps } from '@material-ui/core';
import { Text, View } from 'components/Common';
import React, { FC, useMemo, useState } from 'react';
import { colors, mc, ms, mx, StyleProps, Styles } from 'styles';
import { genId } from 'utils';

// import resizeIcon from './assets/resizeIcon.svg';

interface CustomProps extends StyleProps {
  value?: string;
  label?: string;
  error?: boolean;
  resize?: boolean;
  helperText?: string;
  className?: string;
  fontSize?: number;
}

type Props = TextareaAutosizeProps & CustomProps;

export const FormTextArea: FC<Props> = ({
  value = '',
  label,
  className,
  onChange,
  style,
  error,
  helperText,
  fontSize,
  resize,
  ...props
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const isActive = focus || Boolean(value);
  const textAreaId = useMemo(() => genId(), []);
  const classes = useStyles();
  return (
    <View className={className} style={styles.container}>
      <label
        htmlFor={textAreaId}
        style={styles.textAreaWrapper}
        className={mc(resize && classes.containerResizeIcon, resize && isActive && classes.containerResizeIconActive)}
      >
        <TextareaAutosize
          id={textAreaId}
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={onChange}
          value={value}
          style={ms(
            styles.textArea,
            {
              overflow: 'auto',
              resize: resize ? 'vertical' : 'none',
              fontSize: fontSize ? fontSize : 16,
            },
            isActive && styles.focusedArea,
            style,
          )}
          className={classes.textArea}
        />
        <Text style={ms(styles.label, isActive && styles.focusedLabel, error && styles.error)}>{label}</Text>
      </label>
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </View>
  );
};

const useStyles = makeStyles({
  containerResizeIcon: {
    '&::after': {
      // TODO: Temporary disabled cos it is looks not well at the Windows
      // More info here: https://meetiris.atlassian.net/browse/DO-101
      //
      // content: '""',
      // width: 12,
      // height: 12,
      // position: 'absolute',
      // right: 8,
      // bottom: 13,
      // backgroundColor: colors.paleGrey,
      // backgroundImage: `url(${resizeIcon})`,
      // backgroundRepeat: 'no-repeat',
      // display: 'block',
      // pointerEvents: 'none',
    },
  },
  containerResizeIconActive: {
    '&::after': {
      // backgroundColor: colors.white,
    },
  },
  textArea: {
    '&::-webkit-resizer': {
      paddingRight: 15,
    },
  },
});

const styles: Styles = {
  container: {
    width: '100%',
    position: 'relative',
    cursor: 'text',
    boxSizing: 'border-box',
    height: '100%',
  },
  textAreaWrapper: {
    height: '100%',
    position: 'relative',
  },
  textArea: {
    width: '100%',
    height: '100%',
    minHeight: 76,
    maxHeight: 255,
    border: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    background: colors.paleGrey,
    padding: 15,
    borderRadius: 12,
  },
  focusedArea: {
    background: colors.white,
    ...mx.border(1, 'solid', '#cecece'),
    boxSizing: 'border-box',
  },
  label: {
    top: 0,
    left: 0,
    zIndex: 1,
    position: 'absolute',
    fontSize: 16,
    transform: 'translate(15px, 18px) scale(1)',
    textTransform: 'capitalize',
    color: colors.withAlpha(colors.black, 0.54),
    transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  focusedLabel: {
    transform: 'translate(0, -20px) scale(.75)',
    transformOrigin: 'top left',
    color: colors.steal,
  },
  error: {
    color: colors.error,
  },
};

export type FormTextAreaProps = Props;
export default FormTextArea;
