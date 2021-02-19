import { Avatar, Menu, MenuItem } from '@material-ui/core';
import { Image, View } from 'components/Common';
import React, { FC, MouseEvent, useState } from 'react';
import { colors, mx, StyleProps, Styles } from 'styles';

import logoImg from './assets/logo.png';
import profileImg from './assets/profile.png';
import FilledBtn from './components/FilledBtn';
import TextBtn from './components/TextBtn';

interface Props extends StyleProps {
  onLogoClick?: () => void;
  onLogoutClick?: () => void;
}

export const DashboardAppBar: FC<Props> = ({ style, onLogoClick, onLogoutClick }) => {
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

  return (
    <View style={[styles.container, style]} row={true} alignItems="center">
      <a style={styles.logoWrap} href="#" onClick={handleLogoClick}>
        <Image style={styles.logo} source={logoImg} />
      </a>
      <View style={styles.mainSection} flex="1" row={true}>
        <FilledBtn style={styles.mainItem} href="#" active={true}>
          {'Events'}
        </FilledBtn>
        <FilledBtn style={styles.mainItem} href="#">
          {'Analytics'}
        </FilledBtn>
        <FilledBtn style={styles.mainItem} href="#">
          {'User Management'}
        </FilledBtn>
      </View>
      <TextBtn href="#">{`Support`}</TextBtn>
      <View style={styles.splitter} />
      <TextBtn href="#">{`Contact Us`}</TextBtn>
      <View style={styles.splitter} />
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
    </View>
  );
};

const styles: Styles = {
  container: {
    height: 73,
    backgroundColor: colors.whiteTwo,
    paddingRight: 36,
    ...mx.borderBottom(1, 'solid', colors.lightBlueGrey),
  },
  logoWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 73,
    width: 73,
    ...mx.borderRight(1, 'solid', colors.lightBlueGrey),
  },
  logo: {
    width: 50,
    height: 50,
  },
  mainSection: {
    height: 73,
  },
  mainItem: {
    height: 73,
    width: 201,
    ...mx.borderRight(1, 'solid', colors.lightBlueGrey),
    ...mx.borderBottom(1, 'solid', colors.lightBlueGrey),
  },
  rightSection: {
    marginLeft: 16,
    height: 73,
  },
  thumbWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 73,
    textDecoration: 'none',
    color: 'inherit',
  },
  thumb: {
    width: 55,
    height: 55,
    marginRight: 5,
  },
  thumbIcon: {
    fontSize: '11px',
  },
  splitter: {
    width: 1,
    height: 20,
    ...mx.borderRight(1, 'solid', colors.coolGrey),
  },
};

export type DashboardAppBarProps = Props;
export default DashboardAppBar;
