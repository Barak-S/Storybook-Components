import { List, makeStyles, MenuItem, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
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

export const AppBarMenu: FC<Props> = ({
  hiddenBtns = [],
  logout = true,
  icons = true,
  onClick,
  onLogoutClick,
  onMenuBtnClick,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const isEventsHidden = !!hiddenBtns.find(btnName => btnName === 'events');
  const isAnalyticsHidden = !!hiddenBtns.find(btnName => btnName === 'analytics');
  const isUsersHidden = !!hiddenBtns.find(btnName => btnName === 'users');
  const isProfileHidden = !!hiddenBtns.find(btnName => btnName === 'profile');
  const isNotesHidden = !!hiddenBtns.find(btnName => btnName === 'notes');
  const isLogoutHidden = !logout;

  return (
    <List className={classes.container} component="nav" onClick={onClick}>
      {!isEventsHidden && (
        <MenuItem component="button" onClick={() => onMenuBtnClick('events')}>
          {icons && <LineAwesomeIcon type={'calendar-check'} />}
          {'Events'}
        </MenuItem>
      )}
      {!isAnalyticsHidden && (
        <MenuItem component="button" onClick={() => onMenuBtnClick('analytics')}>
          {icons && <LineAwesomeIcon type={'chart-line'} />}
          {'Analytics'}
        </MenuItem>
      )}
      {!isUsersHidden && (
        <MenuItem component="button" onClick={() => onMenuBtnClick('users')}>
          {icons && <LineAwesomeIcon type={'id-card'} />}
          {'User Management'}
        </MenuItem>
      )}
      {!isProfileHidden && (
        <MenuItem component="button" onClick={() => onMenuBtnClick('profile')}>
          {icons && <LineAwesomeIcon type="user" />}
          {'Profile'}
        </MenuItem>
      )}
      {!isNotesHidden && (
        <MenuItem component="button" onClick={() => onMenuBtnClick('notes')}>
          {icons && <LineAwesomeIcon type="sticky-note" />}
          {'Notes'}
        </MenuItem>
      )}
      {!isLogoutHidden && (
        <MenuItem component="button" onClick={onLogoutClick}>
          <LineAwesomeIcon type="sign-out-alt" />
          {'Logout'}
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
