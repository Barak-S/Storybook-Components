import { Grid } from '@material-ui/core';
import { Accordion } from 'components/Navigation';
import { ThemeSwitcher } from 'components/Theme';
import { EventTheme, EventThemeUpdate } from 'core/api';
import React, { FC } from 'react';
import { StyleProps } from 'styles';
import ThemeEditForm from '../EditForm';

interface Props extends StyleProps {
  items: EventTheme[];
  expanded?: string;
  selected?: string;
  editForm?: EventThemeUpdate;
  onExpandedChange?: (id?: string) => void;
  onSelectedChange?: (id?: string) => void;
  onEditFormChange?: (data: EventThemeUpdate) => void;
}

export const ThemesAccordion: FC<Props> = ({
  items,
  expanded,
  selected,
  editForm,
  onExpandedChange,
  onSelectedChange,
  onEditFormChange,
}) => {
  const handleExpandedChange = (id: string) => (val: boolean) => {
    if (onExpandedChange) {
      onExpandedChange(val ? id : undefined);
    }
  };

  const handleSelectedChange = (id: string) => (val: boolean) => {
    if (onSelectedChange) {
      onSelectedChange(val ? id : undefined);
    }
  };

  return (
    <Grid>
      {items.map(itm => (
        <Accordion
          key={itm.id}
          id={itm.id}
          title={itm.name}
          expanded={expanded === itm.id}
          onChange={handleExpandedChange(itm.id)}
        >
          <ThemeSwitcher item={itm} selected={selected === itm.id} onSelectedChange={handleSelectedChange(itm.id)} />
          {selected === itm.id && <ThemeEditForm data={editForm} onChange={onEditFormChange} />}
        </Accordion>
      ))}
    </Grid>
  );
};

export default ThemesAccordion;
