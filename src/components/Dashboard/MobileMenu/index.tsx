import { Avatar, Drawer, Grid, IconButton, makeStyles } from '@material-ui/core';
import { Text } from 'components/Common';
import profileImg from 'assets/profilePlaceholder.png';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mx, StyleProps, Styles } from 'styles';

import AppBarMenu, { AppBarMenuProps, DashboardAppBarBtn } from '../AppBar/components/Menu';
import DashboardUserNav, { DashboardUserNavBtnType } from '../UserNav';

interface Props extends StyleProps {
  activeTab: DashboardAppBarBtn;
  setActiveTab: (name: DashboardAppBarBtn) => void;
  open: boolean;
  onClose: () => void;
  onLogoutClick: () => void;
  onMenuBtnClick: AppBarMenuProps['onMenuBtnClick'];
  handleUseNavBtnClick?: (btn: DashboardUserNavBtnType) => void;
}

export const DashboardMobileMenu: FC<Props> = ({
  activeTab,
  setActiveTab,
  open,
  onClose,
  onLogoutClick,
  onMenuBtnClick,
  handleUseNavBtnClick,
}) => {
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} onClose={onClose} className={classes.container}>
      <Grid style={styles.navigation}>
        <Grid style={styles.avatarWrap}>
          <Grid container direction="row" alignItems="center">
            <Avatar alt="Profile Picture" src={profileImg} />
            <Text>{'John Doe'}</Text>
          </Grid>
          <IconButton onClick={onClose} component="button">
            <LineAwesomeIcon type="times" />
          </IconButton>
        </Grid>
        <AppBarMenu
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onClick={onClose}
          onLogoutClick={onLogoutClick}
          onMenuBtnClick={onMenuBtnClick}
        />
      </Grid>
      <DashboardUserNav
        onClick={onClose}
        hiddenBtns={['add']}
        btnsBackgroundColor={colors.white}
        onBtnClick={handleUseNavBtnClick}
      />
    </Drawer>
  );
};

const styles: Styles = {
  navigation: {
    padding: 0,
  },
  avatarWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 16px',
    fontWeight: 'normal',
    color: colors.blackTwo,
    fontSize: 18,
    height: 60,
    ...mx.borderBottom(1, 'solid', colors.silver),
  },
};

const useStyles = makeStyles({
  container: {
    '& .MuiBackdrop-root': {
      background: colors.withAlpha(colors.blackTwo, 0.9),
    },
    '& .MuiPaper-root': {
      left: 60,
      background: colors.paleGrey,
      justifyContent: 'space-between',
    },
    '& .MuiAvatar-root': {
      marginRight: 15,
    },
    '& .MuiListItem-root.MuiButtonBase-root': {
      display: 'flex',
      minHeight: 60,
      fontSize: 20,
      fontWeight: 500,
      color: colors.brownGrey,
      ...mx.borderBottom(1, 'solid', colors.silver),
    },
    '& .MuiIcon-root': {
      color: colors.windowsBlue,
      margin: '0 35px 0 0',
      marginBottom: '0!important',
      '&.la-times': {
        marginRight: 0,
        color: colors.veryLightPinkTwo,
      },
    },
  },
});

export default DashboardMobileMenu;
