import { FormHelperText, makeStyles, TextareaAutosize, TextareaAutosizeProps } from '@material-ui/core';
import { Text, View } from 'components/Common';
import React, { FC, useMemo, useState } from 'react';
import { colors, mc, ms, mx, StyleProps, Styles } from 'styles';
import { genId } from 'utils';
import resizeIcon from './assets/resizeIcon.svg';

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
    <View
      className={mc(resize && classes.containerResizeIcon, resize && focus && classes.containerResizeIconActive, className)}
      style={ms(styles.container, isActive && styles.focusedArea, style)}
    >
      <label htmlFor={textAreaId}>
        <TextareaAutosize
          id={textAreaId}
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={onChange}
          value={value}
          style={ms(styles.textArea, {
            overflow: 'auto',
            resize: resize ? 'vertical' : 'none',
            fontSize: fontSize ? fontSize : 16,
          })}
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
      content: '""',
      width: 12,
      height: 12,
      position: 'absolute',
      right: 15,
      bottom: 15,
      backgroundColor: colors.paleGrey,
      backgroundImage: `url(${resizeIcon})`,
      backgroundRepeat: 'no-repeat',
      display: 'block',
      pointerEvents: 'none',
    },
  },
  containerResizeIconActive: {
    '&::after': {
      backgroundColor: colors.white,
    },
  },
});

const styles: Styles = {
  container: {
    width: '100%',
    position: 'relative',
    padding: 15,
    background: colors.paleGrey,
    ...mx.border(1, 'solid', colors.paleGrey),
    borderRadius: 12,
    cursor: 'text',
  },
  textArea: {
    width: '100%',
    minHeight: 97,
    maxHeight: 255,
    height: '100%',
    border: 'none',
    background: 'transparent',
    fontFamily: 'inherit',
    // position: 'relative',
  },
  focusedArea: {
    background: colors.white,
    borderColor: colors.withAlpha(colors.brownishGrey, 0.3),
  },
  label: {
    top: 0,
    left: 0,
    ...mx.zIndex.overBase,
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
    color: colors.coolBlueTwo,
  },
  error: {
    color: colors.error,
  },
};

export type FormTextAreaProps = Props;
export default FormTextArea;
