import { Avatar, Grid, Hidden, Menu, MenuItem, Slide, useMediaQuery, useTheme } from '@material-ui/core';
import { MobileMenuBtn } from 'components/Buttons';
import { Image, View } from 'components/Common';
import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { StyleProps } from 'styles';

import logoImg from './assets/logo.png';
import profileImg from './assets/profile.png';
import FilledBtn from './components/FilledBtn';
import NavigationBar from './components/NavigationBar';
import TextBtn from './components/TextBtn';
import { styles, useStyles } from './styles';

interface Props extends StyleProps {
  onLogoClick?: () => void;
  onLogoutClick?: () => void;
}

export const DashboardAppBar: FC<Props> = ({ style, onLogoClick, onLogoutClick }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | undefined>(undefined);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [isLgScreen, setIsLgScreen] = useState<boolean>(false);

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onLogoClick) {
      onLogoClick();
    }
  };

  const handleProfileClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    if (onLogoutClick) {
      onLogoutClick();
    }
  };

  const handleToggleMenu = () => {
    setMenuVisible(menuVisible => !menuVisible);
  };

  const theme = useTheme();
  const classes = useStyles(theme);
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    setIsLgScreen(matches);
  }, [matches]);

  return (
    <View style={[styles.container, style]} row={true} alignItems="center">
      <a style={styles.logoWrap} href="#" onClick={handleLogoClick}>
        <Image style={styles.logo} source={logoImg} />
      </a>
      <MobileMenuBtn onClick={handleToggleMenu} open={menuVisible} style={styles.mobileBtn} />
      <Grid className={classes.menuWrap}>
        {isLgScreen ? (
          <NavigationBar />
        ) : (
          <Slide direction="right" in={menuVisible} mountOnEnter unmountOnExit>
            <Grid className={classes.navbarWrap}>
              <NavigationBar />
            </Grid>
          </Slide>
        )}
        <View style={styles.rightSection} justifyContent="center" alignItems="center">
          <a style={styles.thumbWrap} href="#" onClick={handleProfileClick}>
            <Avatar style={styles.thumb} alt="Profile Picture" src={profileImg} />
            <i className="las la-caret-down" style={styles.thumbIcon} />
          </a>
        </View>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={!!anchorEl}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </Menu>
      </Grid>
    </View>
  );
};

export type DashboardAppBarProps = Props;
export default DashboardAppBar;
