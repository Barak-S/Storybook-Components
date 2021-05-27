import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { mc, StyleProps } from 'styles';
import { FormSelect, FormSelectCommonProps } from '..';
import { FormSelectStyledProps } from '../Select/components/Styled';
import { timeZones, TimeZoneData } from './data';

interface Props extends StyleProps, FormSelectCommonProps {
  classes?: FormSelectStyledProps['classes'];
  value?: TimeZoneData;
  onChange?: (newValue: TimeZoneData) => void;
}

const defTimeZone = timeZones[0];

export const FormTimeZoneInput: FC<Props> = ({ style, classes, value = defTimeZone, onChange, ...commonProps }) => {
  const localClasses = useStyles();
  return (
    <FormSelect<TimeZoneData>
      style={style}
      classes={{
        ...classes,
        root: mc(classes?.root, localClasses.container),
      }}
      options={timeZones}
      value={value}
      keyExtractor={itm => itm.name}
      titleExtractor={itm => itm.name}
      onChange={onChange}
      {...commonProps}
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
