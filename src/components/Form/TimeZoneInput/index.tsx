import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { mc, StyleProps } from 'styles';
import { FormSelect } from '..';
import { FormSelectStyledProps } from '../Select/components/Styled';
import { timeZones, TimeZoneData } from './data';

interface Props extends StyleProps {
  classes?: FormSelectStyledProps['classes'];
  value?: TimeZoneData;
  label?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (newValue: TimeZoneData) => void;
}

const defTimeZone = timeZones[0];

export const FormTimeZoneInput: FC<Props> = ({ style, classes, value = defTimeZone, label, name, disabled, onChange }) => {
  const localClasses = useStyles();
  return (
    <FormSelect<TimeZoneData>
      style={style}
      classes={{
        ...classes,
        root: mc(classes?.root, localClasses.container),
      }}
      label={label}
      options={timeZones}
      name={name}
      value={value}
      disabled={disabled}
      keyExtractor={itm => itm.name}
      titleExtractor={itm => itm.name}
      onChange={onChange}
    />
  );
};

const useStyles = () =>
  makeStyles({
    container: {
      display: 'block',
      paddingTop: 16,
    },
  })();

export type FormTimeZoneInputProps = Props;
export default FormTimeZoneInput;
