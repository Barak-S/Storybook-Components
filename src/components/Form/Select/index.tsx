import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, ReactNode } from 'react';
import Select from 'react-select';
import { colors, mc, Style, StyleProps, Styles } from 'styles';

import IndicatorsContainer from './components/IndicatorsContainer';
import { useStyles } from './styles';

interface Props extends StyleProps {
  title?: string;
  placeholder?: string;
  value?: Option;
  options?: Option[];
  style?: Style;
  className?: string;
  onChange?: (val: Option | undefined) => void;
}

interface Option {
  value: number;
  label: string | ReactNode;
  icon?: LineAwesomeIconType;
}

export const FormSelect: FC<Props> = ({ title, placeholder, value, options, style, className, onChange }) => {
  const classes = useStyles();

  const prepareOption = (val: Option): Option => {
    const { value, label, icon } = val;
    return !icon
      ? val
      : {
          value,
          label: (
            <>
              <LineAwesomeIcon type={icon} style={styles.icon} />
              <span>{label}</span>
            </>
          ),
        };
  };

  return (
    <FormControl className={mc(classes.container, className)} style={style}>
      <InputLabel shrink>{title}</InputLabel>
      <Select
        value={value}
        defaultValue={value}
        onChange={val => onChange && onChange(val ? val : undefined)}
        components={{ IndicatorsContainer }}
        placeholder={placeholder}
        className={classes.input}
        options={options?.map(prepareOption)}
        disabled
      />
    </FormControl>
  );
};

const styles: Styles = {
  icon: { fill: colors.veryLightPinkTwo },
};

export type FormSelectOption = Option;
export type FormSelectProps = Props;
export default FormSelect;
