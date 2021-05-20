import { View } from 'components/Common';
import React, { ChangeEvent, FC } from 'react';
import { StyleProps, mc } from 'styles';

import { StyledToggle, useStyles } from './styles';

interface Props extends StyleProps {
  title?: string;
  value?: boolean;
  toggleClassName?: string;
  onChange?: (value: boolean) => void;
}

export const FormToggle: FC<Props> = ({ style, value, title, toggleClassName, onChange }) => {
  const classes = useStyles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.target.checked);

  return (
    <View style={style} row className={classes.container}>
      <View>
        <StyledToggle className={mc(classes.swicher, toggleClassName)} checked={value || false} onChange={handleChange} />
      </View>
      {!!title && <View className={classes.title}>{title}</View>}
    </View>
  );
};

export type FormToggleProps = Props;
export default FormToggle;
