import { Avatar, Drawer, Grid, Hidden, IconButton, makeStyles } from '@material-ui/core';
import { Text } from 'components/Common';
import profileImg from 'assets/profilePlaceholder.png';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { colors, mx, StyleProps, Styles } from 'styles';

import AppBarMenu, { AppBarMenuProps } from '../AppBar/components/Menu';
import DashboardUserNav from '../UserNav';

interface Props extends StyleProps {
  open: boolean;
  onClose: () => void;
  onLogoutClick: () => void;
  onMenuBtnClick: AppBarMenuProps['onMenuBtnClick'];
}

export const DashboardMobileMenu: FC<Props> = ({ open, onClose, onLogoutClick, onMenuBtnClick }) => {
  const classes = useStyles();

  return (
    <Hidden mdUp>
      <Drawer anchor={'right'} open={open} onClose={onClose} className={classes.container}>
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
          <AppBarMenu onClick={onClose} onLogoutClick={onLogoutClick} onMenuBtnClick={onMenuBtnClick} />
        </Grid>
        <DashboardUserNav hiddenBtns={['add']} />
      </Drawer>
    </Hidden>
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
    '& .MuiListItem-root': {
      ...mx.borderBottom(1, 'solid', colors.silver),
      minHeight: 60,
      fontWeight: 500,
      color: colors.brownGrey,
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
