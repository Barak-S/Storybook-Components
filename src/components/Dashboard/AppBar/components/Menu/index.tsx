import { List, makeStyles, MenuItem, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, useState } from 'react';
import { colors, mx, StyleProps } from 'styles';

interface Props extends StyleProps {
  onMenuBtnClick: (name: DashboardAppBarBtn) => void;
  onClick?: () => void;
  onLogoutClick?: () => void;
  hiddenBtns?: DashboardAppBarBtn[];
  logoutVisible?: boolean;
  iconsVisibile?: boolean;
}

export type DashboardAppBarBtn = 'events' | 'analytics' | 'users' | 'profile' | 'notes';

interface BtnData {
  name: DashboardAppBarBtn;
  icon: LineAwesomeIconType;
  label: string;
}

export const AppBarMenu: FC<Props> = ({
  hiddenBtns,
  logoutVisible = true,
  iconsVisibile = true,
  onClick,
  onLogoutClick,
  onMenuBtnClick,
}) => {
  const [active, setactive] = useState<DashboardAppBarBtn>('events');

  const theme = useTheme();
  const classes = useStyles(theme);

  const buttons: BtnData[] = [
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
      icon: 'sticky-note',
      label: 'notes',
    },
  ];

  const handleMenuButtonClick = (name: DashboardAppBarBtn) => () => {
    onMenuBtnClick(name);
    setactive(name);
  };

  const isBtnHidden = (name: DashboardAppBarBtn) => Boolean(hiddenBtns && hiddenBtns.find(itm => itm === name));

  return (
    <List className={classes.container} component="nav" onClick={onClick}>
      {buttons.map(({ name, icon, label }) =>
        !isBtnHidden(name) ? (
          <MenuItem key={name} component="button" selected={name === active} onClick={handleMenuButtonClick(name)}>
            {iconsVisibile && <LineAwesomeIcon type={icon} />}
            {label}
          </MenuItem>
        ) : null,
      )}
      {logoutVisible && (
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
