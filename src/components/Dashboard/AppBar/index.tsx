import { Grid, Hidden, useTheme } from '@material-ui/core';
import logoImg from 'assets/logoSquare.png';

import { Image, Splitter } from 'components/Common';
import React, { FC, MouseEvent } from 'react';
import { StyleProps } from 'styles';
import DashboardDropdownMenu from '../DropdownMenu';

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
  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onLogoClick) {
      onLogoClick();
    }
  };

  const handleLogoutClick = () => {
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
        <AppBarMenu
          onMenuBtnClick={onMenuBtnClick}
          hiddenBtns={['notes', 'profile']}
          logoutVisible={false}
          iconsVisibile={false}
        />
      </Grid>
      <Grid style={styles.rightSection}>
        <Hidden smDown>
          <TextBtn style={styles.supportLink} href="/dashboard/support">
            {'Support'}
          </TextBtn>
          <Splitter />
          <TextBtn style={styles.supportLink} href="/dashboard/contact">
            {'Contact Us'}
          </TextBtn>
          <Splitter />
        </Hidden>
        <DashboardDropdownMenu
          onLogoutClick={handleLogoutClick}
          onMobileMenuClick={onMobileMenuClick}
          onMenuBtnClick={onMenuBtnClick}
        />
      </Grid>
    </Grid>
  );
};

export * from './components/Menu';
export type DashboardAppBarProps = Props;
export default DashboardAppBar;
