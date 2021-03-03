import { Grid, Hidden, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ScreenTitle } from 'components/Common';
import { DashboardTabPanel, DashboardUserNav, DashboardUserNavBtnType } from 'components/Dashboard';
import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { colors, mx, StyleProps, Styles } from 'styles';
import { Log } from 'utils';

import EventsTabs from './components/Tabs';
import DashboardEmailConfirmScene from './scenes/EmailConfirm';

const log = Log('screens.DashboardEvents');

type Props = StyleProps;

export const DashboardEventsScreen: FC<Props> = () => {
  const [tab, setTab] = useState<number>(0);

  const history = useHistory();

  const isEmailConfirmed = false;

  // Handlers

  const handleResendEmailPress = () => {
    log.debug('hanlde resend email press');
  };

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
  const classes = useStyles(theme);

  const eventTabs = <EventsTabs tabValue={tab} onTabChange={(_e, val) => setTab(val)} />;

  return (
    <>
      <ScreenTitle />
      <Grid style={styles.container}>
        <Hidden smDown>{eventTabs}</Hidden>
        <Grid>
          <DashboardTabPanel className={classes.tabPanel} value={tab} index={0}>
            {!isEmailConfirmed && <DashboardEmailConfirmScene onSubmit={handleResendEmailPress} />}
            <Hidden smDown>
              <DashboardUserNav disabledBtns={['add']} onBtnClick={handleUseNavBtnClick} />
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
