import { Grid, Hidden, useTheme } from '@material-ui/core';
import { BrandLogo } from 'components/Brand';
import { VerticalSplitter } from 'components/Data';
import React, { FC, MouseEvent } from 'react';
import { StyleProps } from 'styles';

import DashboardDropdownMenu from '../DropdownMenu';
import AppBarMenu, { AppBarMenuProps, DashboardAppBarBtn } from './components/Menu';
import TextBtn from './components/TextBtn';
import { styles, useStyles } from './styles';

interface Props extends StyleProps {
  activeTab: DashboardAppBarBtn;
  setActiveTab: (name: DashboardAppBarBtn) => void;
  onLogoClick?: () => void;
  onLogoutClick?: () => void;
  onMobileMenuClick?: () => void;
  onMenuBtnClick: AppBarMenuProps['onMenuBtnClick'];
}

export const DashboardAppBar: FC<Props> = ({
  activeTab,
  setActiveTab,
  onLogoClick,
  onLogoutClick,
  onMobileMenuClick,
  onMenuBtnClick,
}) => {
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
    <Grid className={classes.container}>
      <Grid className={classes.mainSection}>
        <a style={styles.logoWrap} href="#" onClick={handleLogoClick}>
          <BrandLogo className={classes.logo} type="icon" />
        </a>
        <AppBarMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
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
          <VerticalSplitter />
          <TextBtn style={styles.supportLink} href="/dashboard/contact">
            {'Contact Us'}
          </TextBtn>
          <VerticalSplitter />
        </Hidden>
        <DashboardDropdownMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
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
