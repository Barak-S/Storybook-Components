import { Avatar, Drawer, Grid, Hidden, IconButton, List, makeStyles, MenuItem } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import { Text } from 'components/Common';
import React, { FC } from 'react';
import { colors, mx, StyleProps, Styles } from 'styles';
import profileImg from '../../assets/profile.png';
import AppBarTabs, { AppBarTabsProps } from '../AppBar/components/Tabs';
import DashboardUsernavigation from '../UserNavigation';

const userName = 'John Doe';

interface Props extends StyleProps {
  open: boolean;
  tabValue: AppBarTabsProps['tabValue'];
  onTabChange: AppBarTabsProps['onTabChange'];
  onClose: () => void;
  onLogoutClick: () => void;
}

export const DashboardMenu: FC<Props> = ({ open, tabValue, onTabChange, onClose, onLogoutClick }) => {
  const handleTabChange = (e: React.ChangeEvent<unknown>, newValue: number) => {
    onTabChange(e, newValue);
    onClose();
  };

  const handleProfileClick = () => {
    onClose();
  };

  const handleNotesClick = () => {
    onClose();
  };

  const handleLogoutClick = () => {
    onClose();
    onLogoutClick();
  };

  const classes = useStyles();

  return (
    <Hidden mdUp>
      <Drawer anchor={'right'} open={open} onClose={onClose} className={classes.container}>
        <List component="nav" aria-label="secondary mailbox folders" style={styles.navigation}>
          <MenuItem button style={styles.avatarWrap}>
            <Grid container direction="row" alignItems="center">
              <Avatar alt="Profile Picture" src={profileImg} />
              <Text>{userName}</Text>
            </Grid>
            <IconButton onClick={onClose} component="button">
              <LineAwesomeIcon type="times" />
            </IconButton>
          </MenuItem>
          <AppBarTabs tabValue={tabValue} onTabChange={handleTabChange} />
          <MenuItem onClick={handleProfileClick}>
            <LineAwesomeIcon type="user" />
            {'Profile'}
          </MenuItem>
          <MenuItem onClick={handleNotesClick}>
            <LineAwesomeIcon type="sticky-note" />
            {'Notes'}
          </MenuItem>
          <MenuItem onClick={handleLogoutClick}>
            <LineAwesomeIcon type="sign-out-alt" />
            {'Logout'}
          </MenuItem>
        </List>
        <DashboardUsernavigation />
      </Drawer>
    </Hidden>
  );
};

const styles: Styles = {
  navigation: {
    padding: 0,
  },
  avatarWrap: {
    padding: '0 16px',
    justifyContent: 'space-between',
    fontWeight: 'normal',
    color: colors.blackTwo,
    fontSize: 18,
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

export default DashboardMenu;
