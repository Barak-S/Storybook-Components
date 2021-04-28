import { TextButton } from 'components/Buttons';
import { View } from 'components/Common';
import { Social } from 'core/api';
import React, { FC } from 'react';
import { ms, StyleProps, Styles } from 'styles';
import { genId } from 'utils';

import FormSocialsInputItem from './components/Item';

interface Props extends StyleProps {
  items?: Social[];
  onChange?: (items: Social[]) => void;
}

export const FormSocialsInput: FC<Props> = ({ style, items = [], onChange }) => {
  const genNewItem = (items: Social[] = []): Social => {
    if (!items.length) {
      return { name: 'twitter', id: genId(), url: '' };
    }
    const usedSocials = items.map(itm => itm.name);
    const unusedSocials = ['facebook', 'twitter', 'linkedin', 'instagram', 'google', 'youtube', 'custom'].filter(
      itm => !usedSocials.includes(itm),
    );
    return { name: unusedSocials.length ? unusedSocials[0] : 'custom', id: genId(), url: '' };
  };

  const handleItemChange = (newItem: Social) => {
    if (onChange) {
      if (newItem.id === 'def') {
        onChange([{ ...newItem, id: genId() }]);
      } else {
        onChange(items.map(itm => (itm.id !== newItem.id ? itm : { ...itm, ...newItem })));
      }
    }
  };

  const handleItemRemove = (rmItem: Social) => {
    onChange && onChange(items.filter(itm => itm.id !== rmItem.id));
  };

  const handleAddClick = () => {
    if (onChange) {
      if (items.length) {
        onChange([...items, genNewItem(items)]);
      } else {
        const item = genNewItem();
        onChange([item, genNewItem([item])]);
      }
    }
  };

  const styles = getStyles();

  return (
    <View style={ms(styles.container, style)} alignItems="flex-start">
      {items.map(itm => (
        <FormSocialsInputItem
          style={styles.item}
          key={itm.id}
          item={itm}
          onRemove={handleItemRemove}
          onChange={handleItemChange}
        />
      ))}
      {!items.length && (
        <FormSocialsInputItem
          style={styles.item}
          item={{ name: 'twitter', id: 'def', url: '' }}
          onRemove={handleItemRemove}
          onChange={handleItemChange}
        />
      )}
      <TextButton style={styles.addBtn} onClick={handleAddClick} disabled={false}>
        {'+ Add'}
      </TextButton>
    </View>
  );
};

const getStyles = (): Styles => ({
  container: {},
  item: {
    width: '100%',
    maxWidth: 806,
    marginBottom: 20,
  },
  addBtn: {},
});

export type FormSocialsInputProps = Props;
export default FormSocialsInput;
