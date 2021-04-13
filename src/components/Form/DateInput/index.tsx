import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { colors } from 'styles';
import { FormTextInput, FormTextInputProps } from '..';

type Props = FormTextInputProps;

export const FormDateInput: FC<Props> = ({ ...props }) => {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth() + 1 > 9 ? todayDate.getMonth() + 1 : `0${todayDate.getMonth() + 1}`;
  const todayDay = todayDate.getDate();
  const defaultDateValue = `${todayYear}-${todayMonth}-${todayDay}`;

  return (
    <FormTextInput
      {...props}
      iconStart={<LineAwesomeIcon type="calendar" color={colors.brownishGrey} />}
      iconEnd={null}
      type="date"
      value={defaultDateValue}
      inputStyle={{
        color: colors.brownishGrey,
        fontSize: 16,
        paddingLeft: 68,
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default FormDateInput;
