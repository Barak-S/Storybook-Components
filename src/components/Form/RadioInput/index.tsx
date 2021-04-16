import { FormControlLabel, FormControlLabelProps, Radio } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  value: FormControlLabelProps['value'];
  label: FormControlLabelProps['label'];
}

export const FormRadioInput: FC<Props> = ({ value, label }) => {
  const styles = getStyles();

  return (
    <FormControlLabel
      style={styles.container}
      value={value}
      control={
        <Radio icon={<LineAwesomeIcon type="circle" size={26} />} checkedIcon={<LineAwesomeIcon type="dot-circle" size={26} />} />
      }
      label={label}
    />
  );
};

const getStyles = (): Styles => ({
  container: {
    color: colors.brownishGrey,
  },
});

export type FormRadioInputProps = Props;
export default FormRadioInput;
