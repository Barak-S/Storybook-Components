import { EventType } from 'core/api';
import React, { FC } from 'react';

import FormSelect, { FormSelectCommonProps } from '../Select';

interface Props extends FormSelectCommonProps {
  value?: EventType;
  onChange?: (val: EventType) => void;
}

interface EventTypeOpt {
  name: string;
  value: EventType;
}

export const FormEventTypeSelect: FC<Props> = ({ value, onChange, ...commonProps }) => {
  const opts: EventTypeOpt[] = [
    { value: 'public', name: 'Public' },
    { value: 'public-with-registration', name: 'Public with registration' },
    { value: 'private-with-registration', name: 'Private with registration' },
  ];
  return (
    <FormSelect<EventTypeOpt>
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
