import { EventType, EventTypeArr, eventTypeToName } from 'core/api';
import React, { FC } from 'react';

import FormSelect, { FormSelectCommonProps } from '../Select';

interface Props extends FormSelectCommonProps {
  value?: EventType;
  onChange?: (val: EventType) => void;
}

interface SelectOpt {
  name: string;
  value: EventType;
}

export const FormEventTypeSelect: FC<Props> = ({ value, onChange, ...commonProps }) => {
  const opts: SelectOpt[] = EventTypeArr.map(itm => ({ value: itm, name: eventTypeToName(itm) }));
  return (
    <FormSelect<SelectOpt>
      options={opts}
      value={value ? opts.find(itm => itm.value === value) : undefined}
      keyExtractor={itm => itm.value}
      titleExtractor={itm => itm.name}
      onChange={opt => onChange && onChange(opt.value)}
      {...commonProps}
    />
  );
};

export type FormEventTypeSelectProps = Props;
export default FormEventTypeSelect;
