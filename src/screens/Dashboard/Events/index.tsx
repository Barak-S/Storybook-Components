import { Grid, Hidden, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { ScreenTitle } from 'components/Common';
import { DasbhoardTab, DashboardTabPanel, DashboardTabs, DashboardUserNav, DashboardUserNavBtnType } from 'components/Dashboard';
import { useAuth } from 'core/auth';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { colors, mx, StyleProps, Styles } from 'styles';
import { Log } from 'utils';

import DashboardEmailConfirmScene from './scenes/EmailConfirm';
import FirstEventSetup from './scenes/FirstEventSetup';

const log = Log('screens.DashboardEvents');

type Props = StyleProps;

export const DashboardEventsScreen: FC<Props> = () => {
  const [tab, setTab] = useState<number>(0);

  const history = useHistory();
  const { userConfirmed } = useAuth();

  // Handlers

  const handleUseNavBtnClick = (btn: DashboardUserNavBtnType) => {
    log.debug('hanlde user nav btn click, btn=', btn);
    switch (btn) {
      case 'contact':
        return history.push({ pathname: routes.dashboard.contact });
      case 'faq':
        return history.push({ pathname: routes.dashboard.faq });
      case 'profile':
        return history.push({ pathname: routes.dashboard.profile });
      case 'support':
        return history.push({ pathname: routes.dashboard.support });
    }
  };

  // Render

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles(theme);

  const tabs: DasbhoardTab[] = [
    {
      index: 0,
      label: 'Upcoming',
    },
    {
      index: 1,
      label: 'Archived',
      disabled: !userConfirmed,
      visible: !isMobile,
    },
    {
      index: 2,
      label: 'Explore',
      disabled: !userConfirmed,
    },
    {
      index: 3,
      label: 'Liked',
      disabled: !userConfirmed,
    },
  ];

  const eventTabs = <DashboardTabs tabs={tabs} tab={tab} onTabChange={(_e, val) => setTab(val)} />;

  return (
    <>
      <ScreenTitle />
      <Grid style={styles.container}>
        <Hidden smDown>{eventTabs}</Hidden>
        <Grid>
          <DashboardTabPanel className={classes.tabPanel} value={tab} index={0}>
            {!userConfirmed ? <DashboardEmailConfirmScene /> : <FirstEventSetup />}
            <Hidden smDown>
              <DashboardUserNav disabledBtns={!userConfirmed ? ['add'] : []} onBtnClick={handleUseNavBtnClick} />
            </Hidden>
          </DashboardTabPanel>
          <DashboardTabPanel className={classes.tabPanel} value={tab} index={1}>
            {'Archived'}
          </DashboardTabPanel>
          <DashboardTabPanel className={classes.tabPanel} value={tab} index={2}>
            {'Explore'}
          </DashboardTabPanel>
          <DashboardTabPanel className={classes.tabPanel} value={tab} index={3}>
            {'Liked'}
          </DashboardTabPanel>
        </Grid>
        <Hidden mdUp>
          <Grid className={classes.mobileTabs}>{eventTabs}</Grid>
        </Hidden>
      </Grid>
    </>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: 16,
    textTransform: 'uppercase',
    color: colors.brownGrey,
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    tabPanel: {
      padding: 0,
      [theme.breakpoints.up('md')]: {
        padding: '35px 0',
      },
    },
    mobileTabs: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      ...mx.zIndex.mobileTabs,
    },
  })();

export default DashboardEventsScreen;
