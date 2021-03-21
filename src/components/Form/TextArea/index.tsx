import { makeStyles, TextareaAutosize, TextareaAutosizeProps } from '@material-ui/core';
import { Text } from 'components/Common';
import React, { FC, useState } from 'react';
import { colors, mc, mx, StyleProps } from 'styles';
import { genId } from 'utils';

interface CustomProps extends StyleProps {
  value?: string;
  label?: string;
}

type Props = TextareaAutosizeProps & CustomProps;

export const FormTextArea: FC<Props> = ({ value = '', label, onChange, ...props }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const classes = useStyles();
  const isActive = focus || Boolean(value);
  const textAreaId = genId();

  return (
    <label htmlFor={textAreaId} className={mc(classes.container, isActive && classes.focusedArea)}>
      <TextareaAutosize
        id={textAreaId}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={onChange}
        className={classes.textArea}
        value={value}
      />
      <Text className={mc(classes.label, isActive && classes.focusedLabel)}>{label}</Text>
    </label>
  );
};

const useStyles = makeStyles({
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
    minHeight: 116,
    maxHeight: 116,
    fontSize: 21,
    border: 'none',
    background: 'transparent',
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
    transform: 'translate(15px, 20px) scale(1)',
    textTransform: 'capitalize',
    color: colors.withAlpha(colors.black, 0.54),
    transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  focusedLabel: {
    transform: 'translate(0, -18px) scale(.75)',
    transformOrigin: 'top left',
    color: colors.coolBlueTwo,
  },
});

export type FormTextAreaProps = Props;
export default FormTextArea;
