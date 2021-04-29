import { Avatar, Grid, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import profileImg from 'assets/profilePlaceholder.png';
import { Dropdown } from 'components/Navigation';
import { User } from 'core/api';
import { modCloudinaryUrl } from 'core/cloudinary';
import React, { FC, MouseEvent, useState } from 'react';
import { colors, StyleProps, Styles, withDensity } from 'styles';

import AppBarMenu, { AppBarMenuProps, DashboardAppBarBtn } from '../AppBar/components/Menu';

interface Props extends StyleProps {
  user: User;
  activeTab: DashboardAppBarBtn;
  setActiveTab: (name: DashboardAppBarBtn) => void;
  onLogoutClick?: () => void;
  onMenuBtnClick: AppBarMenuProps['onMenuBtnClick'];
  onMobileMenuClick?: () => void;
}

export const DashboardDropdownMenu: FC<Props> = ({
  activeTab,
  user,
  setActiveTab,
  onLogoutClick,
  onMenuBtnClick,
  onMobileMenuClick,
}) => {
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

  const handleMobileMenuClick = () => {
    if (onMobileMenuClick) {
      onMobileMenuClick();
    }
  };

  const classes = useStyles(theme);

  const thumb = user.thumbnail
    ? modCloudinaryUrl(user.thumbnail, { transform: { width: withDensity(55), height: withDensity(55), crop: 'fill' } })
    : profileImg;

  return (
    <Grid style={styles.container}>
      <a style={styles.thumbWrap} href="#" onClick={isMobile ? handleMobileMenuClick : handleProfileClick}>
        <Avatar className={classes.thumb} alt="Profile Picture" src={thumb} />
      </a>
      <Dropdown
        icon={isMobile ? 'ellipsis-v' : undefined}
        anchor={anchorEl}
        open={!!anchorEl}
        onClose={handleMenuClose}
        onToggle={isMobile ? handleMobileMenuClick : handleProfileClick}
        classes={{
          menu: classes.dropdown,
          icon: classes.dropdownIcon,
        }}
      >
        <AppBarMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onMenuBtnClick={onMenuBtnClick}
          onLogoutClick={onLogoutClick}
          hiddenBtns={['events', 'analytics', 'users']}
        />
      </Dropdown>
    </Grid>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
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
    thumb: {
      width: 45,
      height: 45,
      marginRight: 5,
      [theme.breakpoints.up('lg')]: {
        width: 55,
        height: 55,
      },
    },
    dropdown: {
      '& .MuiPaper-rounded': {
        transform: 'translate(10px, 50px)!important',
      },
      '& .MuiList-root': {
        flexDirection: 'column',
        overflow: 'hidden',

        '& .MuiButtonBase-root': {
          display: 'flex',
          padding: '8px 16px',
          color: colors.marineBlue,
          fontWeight: 400,
          fontSize: 16,
          '&:hover, &.Mui-selected': {
            fontWeight: 'normal',
            fontSize: 16,
          },
        },
        '& .MuiIcon-root': {
          color: colors.coolBlue,
          marginRight: 10,
        },
      },
    },
    dropdownIcon: {
      fontSize: 24,
      color: colors.brownishGrey,
      transform: 'translateX(-5px)',
      [theme.breakpoints.up('md')]: {
        color: colors.marineBlue,
        fontSize: 16,
        transform: 'initial',
      },
    },
  })();

export default DashboardDropdownMenu;
