import { Grid, makeStyles, List, MenuItem, useTheme, Theme } from '@material-ui/core';
import { Dropdown } from 'components/Common';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, useState, MouseEvent } from 'react';
import { colors, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  onEditClick?: () => void;
  onCloneClick?: () => void;
  onArchiveClick?: () => void;
  onRemoveClick?: () => void;
}

type MenuListItems = 'edit' | 'clone' | 'archive' | 'delete';

interface MenuListItemData {
  name: MenuListItems;
  icon: LineAwesomeIconType;
}

const menuListItems: MenuListItemData[] = [
  {
    name: 'edit',
    icon: 'edit',
  },
  {
    name: 'clone',
    icon: 'copy',
  },
  {
    name: 'archive',
    icon: 'archive',
  },
  {
    name: 'delete',
    icon: 'calendar-times',
  },
];

export const DashboardEventMenu: FC<Props> = ({ onEditClick, onCloneClick, onArchiveClick, onRemoveClick }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | undefined>(undefined);

  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };

  const handleMenuToggle = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleMenuBtnClick = (name: MenuListItems) => {
    switch (name) {
      case 'edit':
        !!onEditClick && onEditClick();
        break;
      case 'clone':
        !!onCloneClick && onCloneClick();
        break;
      case 'archive':
        !!onArchiveClick && onArchiveClick();
        break;
      case 'delete':
        !!onRemoveClick && onRemoveClick();
        break;
    }
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid style={styles.container}>
      <Dropdown
        anchor={anchorEl}
        open={!!anchorEl}
        onToggle={handleMenuToggle}
        onClose={handleMenuClose}
        classes={{
          menu: classes.dropdown,
          icon: classes.dropdownIcon,
        }}
      >
        <List className={classes.menuList} component="nav" onClick={handleMenuClose}>
          {menuListItems.map(({ name, icon }) => (
            <MenuItem key={name} component="button" onClick={() => handleMenuBtnClick(name)}>
              <LineAwesomeIcon type={icon} />
              {name}
            </MenuItem>
          ))}
        </List>
      </Dropdown>
    </Grid>
  );
};

const styles: Styles = {
  container: {
    marginLeft: 10,
    transform: 'translateY(2px)',
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    menuList: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      '& .MuiButtonBase-root': {
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: colors.white,
          color: colors.marineBlue,
        },
      },
    },
    dropdown: {
      '& .MuiMenu-paper': {
        transform: 'translate(10px, 65%)!important',
      },
      '& .MuiList-root': {
        flexDirection: 'column',
        overflow: 'hidden',

        '& .MuiButtonBase-root': {
          padding: '7px 16px',
          color: colors.marineBlue,
          fontWeight: 400,
          fontSize: 16,
          minHeight: 'auto',
        },
        '& .MuiIcon-root': {
          color: colors.coolBlue,
          marginRight: 10,
        },
      },
    },
    dropdownIcon: {
      fontSize: 16,
      [theme.breakpoints.up('md')]: {
        fontSize: 24,
      },
    },
  })();

export default DashboardEventMenu;
