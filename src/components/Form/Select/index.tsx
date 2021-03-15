import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import React, { FC, useState } from 'react';
import Select from 'react-select';
import { ms, Style, Styles } from 'styles';

import IndicatorsContainer from './components/IndicatorsContainer';
import { useStyles } from './styles';

interface Props {
  title?: string;
  placeholder?: string;
  options?: Option[];
  style?: Style;
}

interface Option {
  value: number;
  label: string;
}

export const FormSelect: FC<Props> = ({ title, placeholder, options, style }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const classes = useStyles();

  return (
    <FormControl style={ms(styles.container, style)}>
      <InputLabel shrink>{title}</InputLabel>
      <Select
        defaultValue={selectedOption}
        onChange={() => setSelectedOption}
        components={{ IndicatorsContainer }}
        placeholder={placeholder}
        className={classes.input}
        options={options}
        disabled
      />
    </FormControl>
  );
};

const styles: Styles = {
  container: { display: 'contents' },
};

export type FormSelectProps = Props;
export default FormSelect;
