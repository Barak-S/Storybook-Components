import { View } from 'components/Common';
import React, { ChangeEvent, FC } from 'react';
import { StyleProps } from 'styles';

import { StyledToggle, useStyles } from './styles';

interface Props extends StyleProps {
  title?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export const FormToggle: FC<Props> = ({ style, value, title, onChange }) => {
  const classes = useStyles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.target.checked);

  return (
    <View style={style} row className={classes.container}>
      <View>
        <StyledToggle className={classes.swicher} checked={value || false} onChange={handleChange} />
      </View>
      {!!title && <View className={classes.title}>{title}</View>}
    </View>
  );
};

export type FormToggleProps = Props;
export default FormToggle;
