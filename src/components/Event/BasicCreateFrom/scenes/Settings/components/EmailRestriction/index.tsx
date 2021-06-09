import { RadioGroup } from '@material-ui/core';
import { FormControlSection, FormRadioInput } from 'components/Form';
import FormTagsInput from 'components/Form/TagsInput';
import React, { ChangeEvent, FC, useState } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  title?: string;
  description?: string;
  items?: string[];
  onChange?: (items?: string[]) => void;
}

export const EventSettingsEmailRestriction: FC<Props> = ({ style, title, description, items, onChange }) => {
  const [radioValue, setRadioValue] = useState<string>(items ? 'restricted' : 'all');

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === 'all') {
      onChange && onChange(undefined);
    }
    if (value === 'restricted') {
      onChange && onChange([]);
    }
    setRadioValue(value);
  };

  const handleItemsChange = (newItems: string[]) => {
    onChange && onChange(newItems);
  };

  return (
    <FormControlSection style={style} title={title} description={description} borderTop={false}>
      <RadioGroup value={radioValue} onChange={handleRadioChange}>
        <FormRadioInput value="all" label="All domains are available to sign up for this event" />
        <FormRadioInput value="restricted" label="The following domains are available to sign up for this event " />
      </RadioGroup>
      <FormTagsInput disabled={radioValue !== 'restricted'} items={items} onChange={handleItemsChange} />
    </FormControlSection>
  );
};

export type EventSettingsEmailRestrictionProps = Props;
export default EventSettingsEmailRestriction;
