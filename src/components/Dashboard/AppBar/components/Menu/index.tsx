import { Hidden, List, makeStyles, MenuItem, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mx, StyleProps } from 'styles';

interface Props extends StyleProps {
  onMenuBtnClick: (name: AppBarButtons) => void;
  onClick?: () => void;
  onLogoutClick?: () => void;
}

export type AppBarButtons = 'events' | 'analytics' | 'users' | 'profile' | 'notes';

export const AppBarMenu: FC<Props> = ({ onClick, onLogoutClick, onMenuBtnClick }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <List className={classes.container} component="nav" onClick={onClick}>
      <MenuItem component="button" onClick={() => onMenuBtnClick('events')}>
        <Hidden mdUp>
          <LineAwesomeIcon type={'calendar-check'} />
        </Hidden>
        {'Events'}
      </MenuItem>
      <MenuItem component="button" onClick={() => onMenuBtnClick('analytics')}>
        <Hidden mdUp>
          <LineAwesomeIcon type={'chart-line'} />
        </Hidden>
        {'Analytics'}
      </MenuItem>
      <MenuItem component="button" onClick={() => onMenuBtnClick('users')}>
        <Hidden mdUp>
          <LineAwesomeIcon type={'id-card'} />
        </Hidden>
        {'User Management'}
      </MenuItem>
      <Hidden mdUp>
        <MenuItem component="button" onClick={() => onMenuBtnClick('profile')}>
          <LineAwesomeIcon type="user" />
          {'Profile'}
        </MenuItem>
      </Hidden>
      <Hidden mdUp>
        <MenuItem component="button" onClick={() => onMenuBtnClick('notes')}>
          <LineAwesomeIcon type="sticky-note" />
          {'Notes'}
        </MenuItem>
      </Hidden>
      <Hidden mdUp>
        <MenuItem component="button" onClick={onLogoutClick}>
          <LineAwesomeIcon type="sign-out-alt" />
          {'Logout'}
        </MenuItem>
      </Hidden>
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
