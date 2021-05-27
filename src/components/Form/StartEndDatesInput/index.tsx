import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { StyleProps, Styles } from 'styles';
import { dayMs } from 'utils';

import FormDateInput from '../DateInput';

interface Props extends StyleProps {
  value?: Value;
  required?: boolean;
  disabled?: boolean;
  labels?: { start?: string; end?: string };
  onChange?: (val?: Value) => void;
}

interface Value {
  start: string;
  end: string;
}

export const FormStartEndDatesInput: FC<Props> = ({ style, value, required, disabled, labels, onChange }) => {
  const curStart = value?.start ? new Date(value.start) : undefined;
  const curEnd = value?.end ? new Date(value.end) : undefined;

  const handleStartChange = (newVal?: Date) => {
    if (!onChange) return;
    if (!newVal) return onChange(undefined);
    const newStartTs = newVal.getTime();
    const start = new Date(newStartTs).toISOString();
    onChange(
      !curEnd
        ? { start, end: new Date(newStartTs + dayMs).toISOString() }
        : {
            start,
            end: curEnd.toISOString(),
          },
    );
  };

  const handleEndChange = (newVal?: Date) => {
    if (!onChange) return;
    if (!newVal) return onChange(undefined);
    const newEndTs = newVal.getTime();
    const end = new Date(newEndTs).toISOString();
    onChange(
      !curStart
        ? { start: new Date(newEndTs - dayMs).toISOString(), end }
        : {
            start: curStart.toISOString(),
            end,
          },
    );
  };

  return (
    <View style={[styles.container, style]} row alignItems="center">
      <FormDateInput
        style={styles.startInput}
        label={labels?.start || 'Start'}
        value={curStart}
        maxDate={curEnd}
        required={required}
        disabled={disabled}
        onChange={handleStartChange}
      />
      <LineAwesomeIcon style={styles.icon} type="arrow-right" />
      <FormDateInput
        style={styles.endInput}
        label={labels?.end || 'End'}
        minDate={curStart}
        value={curEnd}
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
    // flexGrow: 0.8,
    width: '100%',
  },
  endInput: {
    // flexGrow: 0.8,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  timeZoneInput: {
    // flexGrow: 1,
    marginLeft: 10,
  },
};

export type FormStartEndDatesInputProps = Props;
export type FormStartEndDatesInputValue = Value;
export default FormStartEndDatesInput;
