import { Avatar, Grid, makeStyles, Menu, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { FC, useState, MouseEvent } from 'react';
import profileImg from 'assets/profilePlaceholder.png';
import { colors, StyleProps, Styles } from 'styles';
import AppBarMenu, { AppBarMenuProps } from '../AppBar/components/Menu';

interface Props extends StyleProps {
  onLogoutClick?: () => void;
  onMenuBtnClick: AppBarMenuProps['onMenuBtnClick'];
  onMobileMenuClick?: () => void;
}

export const DashboardDropdownMenu: FC<Props> = ({ onLogoutClick, onMenuBtnClick, onMobileMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | undefined>(undefined);

  const handleProfileClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };

  const classes = useStyles(theme);
  const iconType: LineAwesomeIconType = !!anchorEl ? 'angle-up' : 'angle-down';

  return (
    <Grid>
      <a style={styles.thumbWrap} href="#" onClick={isMobile ? onMobileMenuClick : handleProfileClick}>
        <Avatar className={classes.thumb} alt="Profile Picture" src={profileImg} />
        <LineAwesomeIcon type={iconType} style={styles.thumbIcon} />
      </a>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={!!anchorEl}
        onClose={handleMenuClose}
        className={classes.container}
      >
        <Grid onClick={handleMenuClose}>
          <AppBarMenu
            onMenuBtnClick={onMenuBtnClick}
            onLogoutClick={onLogoutClick}
            hiddenBtns={['events', 'analytics', 'users']}
          />
        </Grid>
      </Menu>
    </Grid>
  );
};

const styles: Styles = {
  thumbWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    marginLeft: 16,
    marginRight: 5,
    height: '100%',
  },
  thumbIcon: {
    fontSize: '16px',
  },
  mobileBtn: {
    transform: 'translateX(10px)',
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      '& .MuiPaper-rounded': {
        borderRadius: 8,
        top: '72px!important',
        position: 'realtive',
        overflow: 'visible',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -20,
          right: 10,
          border: '10px solid transparent',
          borderBottomColor: colors.white,
        },
      },
      '& .MuiList-root': {
        flexDirection: 'column',
        overflow: 'hidden',

        '& .MuiButtonBase-root': {
          padding: '8px 16px',
          color: colors.marineBlue,
          fontWeight: 400,
          fontSize: 16,
        },
        '& .MuiIcon-root': {
          color: colors.coolBlue,
          marginRight: 10,
        },
      },
    },
    thumb: {
      width: 45,
      height: 45,
      marginRight: 5,
      [theme.breakpoints.up('lg')]: {
        width: 55,
        height: 55,
      },
    },
  })();

export default DashboardDropdownMenu;
