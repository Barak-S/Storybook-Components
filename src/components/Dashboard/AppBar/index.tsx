import { Avatar, Grid, Hidden, Menu, MenuItem, useTheme } from '@material-ui/core';
import { Image, Splitter } from 'components/Common';
import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { StyleProps } from 'styles';

import logoImg from './assets/logo.png';
import profileImg from './assets/profile.png';
import DashboardTabs from './components/DashboardTabs';
import TextBtn from './components/TextBtn';

import { styles, useStyles } from './styles';

interface Props extends StyleProps {
  tabValue: number;
  onTabChange: (e: ChangeEvent<unknown>, newValue: number) => void;
  onLogoClick?: () => void;
  onLogoutClick?: () => void;
  onTabClick: (value: number) => void;
}

export const DashboardAppBar: FC<Props> = ({ tabValue = 0, onTabChange, onLogoClick, onLogoutClick, onTabClick }) => {
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

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid className={classes.menuWrap}>
      <Grid className={classes.mainSection}>
        <a style={styles.logoWrap} href="#" onClick={handleLogoClick}>
          <Image className={classes.logo} source={logoImg} />
        </a>
        <Hidden smDown>
          <DashboardTabs tabValue={tabValue} onTabChange={onTabChange} onTabClick={onTabClick} />
        </Hidden>
      </Grid>
      <Grid style={styles.rightSection}>
        <Hidden smDown>
          <TextBtn style={styles.suppotLink} href="#">
            Support
          </TextBtn>
          <Splitter />
          <TextBtn style={styles.suppotLink} href="#">
            Contact Us
          </TextBtn>
          <Splitter />
        </Hidden>
        <a style={styles.thumbWrap} href="#" onClick={handleProfileClick}>
          <Avatar className={classes.thumb} alt="Profile Picture" src={profileImg} />
          <i className="las la-caret-down" style={styles.thumbIcon} />
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
