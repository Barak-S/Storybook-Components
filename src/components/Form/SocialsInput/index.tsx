import { TextButton } from 'components/Buttons';
import { View } from 'components/Common';
import { Social } from 'core/api';
import React, { FC, ReactNode } from 'react';
import { ms, StyleProps, Styles } from 'styles';
import { genId } from 'utils';

import FormSocialsInputItem from './components/Item';

interface Props extends StyleProps {
  items?: Social[];
  defSocials?: string[];
  onChange?: (items: Social[]) => void;
}

export const FormSocialsInput: FC<Props> = ({
  style,
  items = [],
  defSocials = ['facebook', 'twitter', 'instagram'],
  onChange,
}) => {
  const genNewItem = (usedSocials: string[] = []): Social => {
    const unusedSocials = ['facebook', 'twitter', 'linkedin', 'instagram', 'google', 'youtube', 'custom'].filter(
      itm => !usedSocials.includes(itm),
    );
    return { name: unusedSocials.length ? unusedSocials[0] : 'custom', id: genId(), url: '' };
  };

  const handleItemChange = (newItem: Social) => {
    if (onChange) {
      if (newItem.id.indexOf('def-') === 0) {
        onChange([...items, { ...newItem, id: genId() }]);
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
      const usedSocials = items.map(itm => itm.name);
      onChange([...items, genNewItem([...defSocials, ...usedSocials])]);
    }
  };

  const renderItems = () => {
    let curItems: Social[] = items;
    const nodes: ReactNode[] = [];
    let index: number = 0;
    for (const defSocial of defSocials) {
      const curItem = curItems.find(itm => itm.name === defSocial);
      if (curItem) {
        nodes.push(renderItem(curItem, `${index}`));
        curItems = curItems.filter(itm => itm.id !== curItem.id);
      } else {
        nodes.push(renderItem({ name: defSocial, id: `def-${defSocial}`, url: '' }, `${index}`, true));
      }
      index++;
    }
    for (const itm of curItems) {
      nodes.push(renderItem(itm, `${index}`));
      index++;
    }
    return nodes;
  };

  const renderItem = (itm: Social, key: string, defItem?: boolean) => (
    <FormSocialsInputItem
      key={key}
      style={styles.item}
      item={itm}
      defItem={defItem}
      onRemove={handleItemRemove}
      onChange={handleItemChange}
    />
  );

  const styles = getStyles();

  return (
    <View style={ms(styles.container, style)} alignItems="flex-start">
      {renderItems()}
      {items.length < 5 && (
        <TextButton style={styles.addBtn} onClick={handleAddClick} disabled={false}>
          {'+ Add'}
        </TextButton>
      )}
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
