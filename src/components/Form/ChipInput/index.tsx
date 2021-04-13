import { Chip, IconButton } from '@material-ui/core';
import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';
import { StyleProps, Styles } from 'styles';

import { FormTextInput } from '../TextInput';

interface Props extends StyleProps {
  label?: string;
  disabled?: boolean;
  items?: Item[];
  onChange?: (items: Item[]) => void;
}

interface Item {
  key: string;
  label: string;
}

export const FormChipInput: FC<Props> = ({ style, label, items = [], disabled, onChange }) => {
  const [value, setValue] = useState<string>();

  const handleDelete = (itemToDelete: Item) => () => {
    onChange && onChange(items.filter(chip => chip.key !== itemToDelete.key));
  };

  const handleAdd = (label: string) => () => {
    const newChipData = [
      ...items,
      {
        label,
        key: `${items.length}`,
      },
    ];
    onChange && onChange(newChipData);
    setValue('');
  };

  return (
    <View style={[styles.container, style]}>
      <FormTextInput
        label={label}
        value={value}
        disabled={disabled}
        fullWidth
        iconEnd={
          <IconButton onClick={handleAdd(String(value))} disabled={!value || disabled}>
            <LineAwesomeIcon type="plus-circle" />
          </IconButton>
        }
        onChange={e => setValue(e.currentTarget.value)}
      />
      <View style={styles.list} row>
        {items.map(data => (
          <Chip key={data.key} style={styles.item} label={data.label} onDelete={handleDelete(data)} />
        ))}
      </View>
    </View>
  );
};

const styles: Styles = {
  container: {},
  list: {
    marginTop: 4,
    flexWrap: 'wrap',
  },
  item: {
    marginRight: 4,
    marginBottom: 4,
  },
};

export type FormChipInputItem = Item;
export type FormChipInputProps = Props;
export default FormChipInput;
