import { List, makeStyles, MenuItem, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, useState } from 'react';
import { colors, mx, StyleProps } from 'styles';

interface Props extends StyleProps {
  onMenuBtnClick: (name: AppBarButtons) => void;
  onClick?: () => void;
  onLogoutClick?: () => void;
  hiddenBtns?: AppBarButtons[];
  logout?: boolean;
  icons?: boolean;
}

export type AppBarButtons = 'events' | 'analytics' | 'users' | 'profile' | 'notes';

interface BtnData {
  name: AppBarButtons;
  icon: LineAwesomeIconType;
  label: string;
}

export const AppBarMenu: FC<Props> = ({
  hiddenBtns = [],
  logout = true,
  icons = true,
  onClick,
  onLogoutClick,
  onMenuBtnClick,
}) => {
  const [active, setactive] = useState<AppBarButtons>('events');

  const theme = useTheme();
  const classes = useStyles(theme);

  const buttonsData: BtnData[] = [
    {
      name: 'events',
      icon: 'calendar-check',
      label: 'events',
    },
    {
      name: 'analytics',
      icon: 'chart-line',
      label: 'analytics',
    },
    {
      name: 'users',
      icon: 'id-card',
      label: 'user management',
    },
    {
      name: 'profile',
      icon: 'user',
      label: 'profile',
    },
    {
      name: 'notes',
      icon: 'user',
      label: 'notes',
    },
  ];

  const renderMenuItems = buttonsData.map(({ name, icon, label }, index) => {
    const isHidden = !!hiddenBtns.find(hiddenBtnName => name === hiddenBtnName);

    if (isHidden) {
      return null;
    }

    const handleMenuButtonClick = () => {
      onMenuBtnClick(name);
      setactive(name);
    };

    const isSelected = name === active;

    return (
      <MenuItem key={index} component="button" selected={isSelected} onClick={handleMenuButtonClick}>
        {icons && <LineAwesomeIcon type={icon} />}
        {label}
      </MenuItem>
    );
  });

  return (
    <List className={classes.container} component="nav" onClick={onClick}>
      {renderMenuItems}
      {logout && (
        <MenuItem component="button" onClick={onLogoutClick}>
          <LineAwesomeIcon type="sign-out-alt" />
          {'logout'}
        </MenuItem>
      )}
    </List>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
      '& .MuiButtonBase-root': {
        textTransform: 'capitalize',
        '&.Mui-selected, &:hover': {
          backgroundColor: colors.white,
          color: colors.marineBlue,
        },
        [theme.breakpoints.up('md')]: {
          padding: '0 40px',
          fontWeight: 500,
          fontSize: 18,
          color: colors.brownGrey,
          ...mx.borderRight(1, 'solid', colors.silver),
        },
        [theme.breakpoints.up('lg')]: {
          padding: '0 70px',
        },
      },
    },
  })();

export type AppBarMenuProps = Props;
export default AppBarMenu;
