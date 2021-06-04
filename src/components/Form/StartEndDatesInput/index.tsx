import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { StyleProps, Styles } from 'styles';

import FormDateInput from '../DateInput';

interface Props extends StyleProps {
  value?: Value;
  minDate?: Date;
  disablePast?: boolean;
  required?: boolean;
  disabled?: boolean;
  emptyLabel?: Partial<StartEndVal<string>>;
  label?: Partial<StartEndVal<string>>;
  onChange?: (val?: Value) => void;
}

interface StartEndVal<T> {
  start: T;
  end: T;
}

type Value = StartEndVal<string>;

const strToDate = (val?: string) => (val ? new Date(val) : undefined);
const dateToStr = (val: Date): string => val.toISOString();
const tsToStr = (val: number): string => dateToStr(new Date(val));

export const FormStartEndDatesInput: FC<Props> = ({
  style,
  value,
  required,
  minDate,
  disablePast,
  emptyLabel,
  disabled,
  label,
  onChange,
}) => {
  const curStart = strToDate(value?.start);
  const curEnd = strToDate(value?.end);

  // Handlers

  const handleStartChange = (newVal?: Date) => {
    if (!onChange) return;
    if (!newVal) return onChange(undefined);
    const newStartTs = newVal.getTime();
    const start = tsToStr(newStartTs);
    if (curEnd) {
      const curEndTs = curEnd.getTime();
      if (curEndTs > newStartTs) {
        onChange({ start, end: dateToStr(curEnd) });
      } else {
        onChange({ start, end: tsToStr(newStartTs + 1) });
      }
    } else {
      onChange({ start, end: tsToStr(newStartTs + 1) });
    }
  };

  const handleEndChange = (newVal?: Date) => {
    if (!onChange) return;
    if (!newVal) return onChange(undefined);
    const newEndTs = newVal.getTime();
    const end = tsToStr(newEndTs);
    if (curStart) {
      const curStartTs = curStart.getTime();
      if (curStartTs < newEndTs) {
        onChange({ start: dateToStr(curStart), end });
      } else {
        onChange({ start: tsToStr(newEndTs - 1), end });
      }
    } else {
      onChange({ start: tsToStr(newEndTs - 1), end });
    }
  };

  return (
    <View style={[styles.container, style]} row alignItems="center">
      <FormDateInput
        style={styles.startInput}
        label={label?.start || 'Start'}
        minDate={minDate}
        value={curStart}
        emptyLabel={emptyLabel?.start}
        disablePast={disablePast}
        required={required}
        disabled={disabled}
        onChange={handleStartChange}
      />
      <LineAwesomeIcon style={styles.icon} type="arrow-right" />
      <FormDateInput
        style={styles.endInput}
        label={label?.end || 'End'}
        minDate={minDate}
        value={curEnd}
        emptyLabel={emptyLabel?.end}
        disablePast={disablePast}
        required={required}
        disabled={disabled}
        onChange={handleEndChange}
      />
    </View>
  );
};

const styles: Styles = {
  container: {
    paddingTop: 30,
  },
  startInput: {
    marginRight: 10,
    width: '100%',
  },
  endInput: {
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  timeZoneInput: {
    marginLeft: 10,
  },
};

export type FormStartEndDatesInputProps = Props;
export type FormStartEndDatesInputValue = Value;
export default FormStartEndDatesInput;
