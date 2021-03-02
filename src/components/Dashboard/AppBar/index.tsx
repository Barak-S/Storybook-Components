import { Avatar, Grid, Hidden, Menu, MenuItem, useMediaQuery, useTheme } from '@material-ui/core';
import logoImg from 'assets/logoSquare.png';
import profileImg from 'assets/profilePlaceholder.png';
import { Image, Splitter } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, MouseEvent, useState } from 'react';
import { StyleProps } from 'styles';

import AppBarMenu, { AppBarMenuProps } from './components/Menu';
import TextBtn from './components/TextBtn';
import { styles, useStyles } from './styles';

interface Props extends StyleProps {
  onLogoClick?: () => void;
  onLogoutClick?: () => void;
  onMobileMenuClick?: () => void;
  onMenuBtnClick: AppBarMenuProps['onMenuBtnClick'];
}

export const DashboardAppBar: FC<Props> = ({ onLogoClick, onLogoutClick, onMobileMenuClick, onMenuBtnClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | undefined>(undefined);

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

  const classes = useStyles(theme);

  return (
    <Grid className={classes.menuWrap}>
      <Grid className={classes.mainSection}>
        <a style={styles.logoWrap} href="#" onClick={handleLogoClick}>
          <Image className={classes.logo} source={logoImg} />
        </a>
        <Hidden smDown>
          <AppBarMenu onMenuBtnClick={onMenuBtnClick} />
        </Hidden>
      </Grid>
      <Grid style={styles.rightSection}>
        <Hidden smDown>
          <TextBtn style={styles.suppotLink} href="#">
            {'Support'}
          </TextBtn>
          <Splitter />
          <TextBtn style={styles.suppotLink} href="#">
            {'Contact Us'}
          </TextBtn>
          <Splitter />
        </Hidden>
        <a style={styles.thumbWrap} href="#" onClick={isMobile ? onMobileMenuClick : handleProfileClick}>
          <Avatar className={classes.thumb} alt="Profile Picture" src={profileImg} />
          <LineAwesomeIcon type="angle-down" style={styles.thumbIcon} />
        </a>
      </Grid>
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
  );
};

export type DashboardAppBarProps = Props;
export default DashboardAppBar;
