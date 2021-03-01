import { Avatar, Grid, Hidden, Menu, MenuItem, useMediaQuery, useTheme } from '@material-ui/core';
import { Image, Splitter } from 'components/Common';
import logoImg from 'components/Dashboard/assets/logo.png';
import profileImg from 'components/Dashboard/assets/profile.png';
import { LineAwesomeIcon } from 'components/Icons';
import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';
import { StyleProps } from 'styles';

import AppBarTabs from './components/Tabs';
import TextBtn from './components/TextBtn';
import { styles, useStyles } from './styles';

interface Props extends StyleProps {
  tabValue: number;
  onTabChange: (e: ChangeEvent<unknown>, newValue: number) => void;
  onLogoClick?: () => void;
  onLogoutClick?: () => void;
  onMobileMenuClick?: () => void;
}

export const DashboardAppBar: FC<Props> = ({
  tabValue = 0,
  onTabChange,
  onLogoClick,
  onLogoutClick,
  onMobileMenuClick,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setIsMobile(matches);
  }, [matches, setIsMobile]);

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
          <AppBarTabs tabValue={tabValue} onTabChange={onTabChange} />
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
