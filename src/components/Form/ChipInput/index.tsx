import { Chip, Grid, IconButton } from '@material-ui/core';
import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, KeyboardEvent, useRef, useState, useEffect } from 'react';
import { StyleProps, Styles, colors, mx, ms } from 'styles';

import { FormTextInput } from '../TextInput';

interface CommonProps extends StyleProps {
  label?: string;
  disabled?: boolean;
}

interface Props extends CommonProps {
  items?: Item[];
  onChange?: (items: Item[]) => void;
}

interface Item {
  key: string;
  label: string;
}

export const FormChipInput: FC<Props> = ({ style, label, items = [], disabled, onChange }) => {
  const defaultInputWidth = 1;
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>();
  const [inputWidth, setInputWidth] = useState<number>(defaultInputWidth);
  const valueRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (items.length) {
      setFocused(true);
    }
  }, [items, focused]);

  useEffect(() => {
    if (!value || !valueRef.current) {
      setInputWidth(defaultInputWidth);

      return;
    }

    const valueWidth = valueRef.current.getBoundingClientRect().width || 1;
    setInputWidth(Math.floor(valueWidth) + 4 * value.length);
  }, [value, valueRef]);

  const handleDelete = (itemToDelete: Item) => () => {
    onChange && onChange(items.filter(chip => chip.key !== itemToDelete.key));
  };

  const handleAdd = (label: string) => () => {
    const newChipData = [
      ...items,
      {
        label,
        key: `${items.length + 1}`,
      },
    ];
    onChange && onChange(newChipData);
    setValue('');
  };

  const handleKeyPress = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (key !== 'Enter' || !value) {
      return;
    }

    handleAdd(value)();
  };

  const handleBlur = () => {
    if (!items.length) {
      setFocused(false);
    }

    if (value) {
      handleAdd(value)();
    }
  };

  const styles = getStyles(focused, inputWidth);

  return (
    <Grid component="label" style={ms(styles.container, style)} onFocus={() => setFocused(true)} onBlur={handleBlur}>
      <View style={styles.label}>{label}</View>
      <View style={styles.list} row>
        {items.map(data => (
          <View key={data.key} style={styles.itemContainer}>
            <Chip style={styles.item} label={data.label} onDelete={handleDelete(data)} />
          </View>
        ))}
        <FormTextInput
          value={value || ''}
          disabled={disabled}
          fullWidth={false}
          onChange={e => setValue(e.currentTarget.value)}
          onKeyPress={handleKeyPress}
          inputStyle={styles.input}
        />
        <div>
          <span ref={valueRef} style={styles.hiddenValue}>
            {value}
          </span>
        </div>
      </View>
      <IconButton onClick={handleAdd(String(value))} disabled={!value || disabled} style={styles.addBtn}>
        <LineAwesomeIcon type="plus-circle" />
      </IconButton>
    </Grid>
  );
};

const getStyles = (focused: boolean, inputWidth: number): Styles => ({
  container: {
    display: 'block',
    position: 'relative',
  },
  addBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 14,
  },
  list: {
    background: focused ? colors.white : colors.paleGrey,
    ...mx.border(1, 'solid', 'transparent'),
    borderColor: focused ? colors.withAlpha(colors.brownishGrey, 0.3) : 'transparent',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexShrink: 0,
    padding: '5px 52px 5px 15px',
    borderRadius: 12,
    minHeight: 52,
    width: '100%',
  },
  itemContainer: {
    padding: 2,
  },
  item: {
    marginRight: 4,
    borderRadius: 7,
  },
  input: {
    background: 'none',
    border: 'none',
    padding: '5px 0',
    height: 'auto',
    borderRadius: 0,
    letterSpacing: 0,
    width: inputWidth,
  },
  hiddenValue: {
    display: 'inline',
    opacity: 0,
    position: 'absolute',
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 0,
    ...mx.zIndex.overBase,
    color: focused ? colors.steal : colors.withAlpha(colors.black, 0.54),
    transform: focused ? 'translate(-7px, -20px) scale(0.75)' : 'translate(15px, 17px)',
    transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
  },
});

export type FormChipInputItem = Item;
export type FormChipInputProps = Props;
export type FormChipInputCommonProps = CommonProps;
export default FormChipInput;
