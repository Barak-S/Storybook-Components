import { Grid } from '@material-ui/core';
import { TextButton } from 'components/Buttons';
import { Social } from 'core/api';
import { startsWith } from 'lodash';
import React, { FC, ReactNode } from 'react';
import { ms, StyleProps, Styles } from 'styles';
import { genId } from 'utils';

import FormSocialsInputItem from './components/Item';

interface Props extends StyleProps {
  items?: Social[];
  defSocials?: string[];
  labelsVisible?: boolean;
  onChange?: (items: Social[]) => void;
}

export const FormSocialsInput: FC<Props> = ({
  style,
  items = [],
  defSocials = ['facebook', 'twitter', 'instagram'],
  labelsVisible,
  onChange,
}) => {
  const genNewItem = (usedSocials: string[] = []): Social => {
    const unusedSocials = ['facebook', 'twitter', 'linkedin', 'instagram', 'google', 'youtube', 'custom'].filter(
      itm => !usedSocials.includes(itm),
    );
    return { name: unusedSocials.length ? unusedSocials[0] : 'custom', id: `custom-${genId()}`, url: '' };
  };

  const handleItemChange = (newItem: Social, index?: number) => {
    if (!onChange) return;
    if (startsWith(newItem.id, 'def-')) {
      const exItem = items.find(itm => itm.id === newItem.id);
      if (exItem) {
        onChange(items.map(itm => (itm.id !== exItem.id ? itm : { ...itm, ...newItem })));
      } else {
        onChange([...items, { ...newItem, id: `def-${index}-${genId()}` }]);
      }
    } else {
      onChange(items.map(itm => (itm.id !== newItem.id ? itm : { ...itm, ...newItem })));
    }
  };

  const handleItemRemove = (rmItem: Social) => {
    onChange && onChange(items.filter(itm => itm.id !== rmItem.id));
  };

  const handleAddClick = () => {
    if (!onChange) return;
    const usedSocials = items.map(itm => itm.name);
    onChange([...items, genNewItem([...defSocials, ...usedSocials])]);
  };

  const renderItems = () => {
    let curItems: Social[] = items;
    const nodes: ReactNode[] = [];
    let index: number = 0;
    // Going throw default socials
    for (let i = 0; i < defSocials.length; i++) {
      const defSocial = defSocials[i];
      // If we do have a current item with a def social name
      const curItem = curItems.find(itm => startsWith(itm.id, `def-${i}-`));
      if (curItem) {
        // Add this item to the default items
        nodes.push(renderItem(curItem, `${index}`, i));
        // Remove this item from the main list
        curItems = curItems.filter(itm => itm.id !== curItem.id);
      } else {
        // Else show def item field
        nodes.push(renderItem({ name: defSocial, id: `def-${index}`, url: '' }, `${index}`, i, true));
      }
      index++;
    }
    // Adding all other items which we have already
    for (const itm of curItems) {
      nodes.push(renderItem(itm, `${index}`));
      index++;
    }
    return nodes;
  };

  const renderItem = (itm: Social, key: string, index?: number, defItem?: boolean) => (
    <Grid key={key} item>
      <FormSocialsInputItem
        style={styles.item}
        item={itm}
        defItem={defItem}
        index={index}
        labelsVisible={labelsVisible}
        onRemove={handleItemRemove}
        onChange={handleItemChange}
      />
    </Grid>
  );

  const styles = getStyles();

  return (
    <Grid style={ms(styles.container, style)} container direction="column" spacing={2}>
      {renderItems()}
      {items.length < 5 && (
        <Grid item container justify="flex-start">
          <TextButton style={styles.addBtn} onClick={handleAddClick} disabled={false}>
            {'+ Add'}
          </TextButton>
        </Grid>
      )}
    </Grid>
  );
};

const getStyles = (): Styles => ({
  container: {},
  item: {},
  addBtn: {},
});

export type FormSocialsInputProps = Props;
export default FormSocialsInput;
