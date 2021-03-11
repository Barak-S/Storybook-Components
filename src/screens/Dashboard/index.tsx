import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ScreenTitle, View } from 'components/Common';
import { DashboardAppBar, DashboardMobileMenu, DashboardAppBarBtn } from 'components/Dashboard';
import { useAuth } from 'core/auth';
import React, { FC, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { ms, srollToTop, StyleProps, Styles } from 'styles';

import DashboardAnalyticsScreen from './Analytics';
import DashboardContactScreen from './Contact';
import DashboardEventsScreen from './Events';
import DashboardFaqScreen from './Faq';
import DashboardProfileScreen from './Profile';
import DashboardSupportScreen from './Support';
import DashboardUserManagementScreen from './UserManagement';

type Props = StyleProps;

export const DashboardScreens: FC<Props> = () => {
  useEffect(() => {
    srollToTop();
  }, []);

  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

  const history = useHistory();
  const { signOut } = useAuth();

  const handleLogoutClick = () => {
    signOut();
    history.push({ pathname: routes.auth.signin });
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuVisible(mobileMenuVisible => !mobileMenuVisible);
  };

  const handleAppBarMenuBtnClick = (name: DashboardAppBarBtn) => {
    history.push({ pathname: routes.dashboard[name] });
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <ScreenTitle title="Dashboard" />
      <Grid container style={styles.container}>
        {mobileMenuVisible && (
          <DashboardMobileMenu
            open={mobileMenuVisible}
            onClose={handleToggleMobileMenu}
            onLogoutClick={handleLogoutClick}
            onMenuBtnClick={handleAppBarMenuBtnClick}
          />
        )}
        <Grid container style={ms(styles.dashboardWrap, { position: mobileMenuVisible ? 'absolute' : 'initial' })}>
          <DashboardAppBar
            onLogoClick={() => history.push({ pathname: routes.dashboard.index })}
            onLogoutClick={handleLogoutClick}
            onMobileMenuClick={handleToggleMobileMenu}
            onMenuBtnClick={handleAppBarMenuBtnClick}
          />
          <View className={classes.dashboardBody} column justifyContent="center" alignItems="center">
            <Switch>
              <Route path={routes.dashboard.events}>
                <DashboardEventsScreen />
              </Route>
              <Route path={routes.dashboard.analytics}>
                <DashboardAnalyticsScreen />
              </Route>
              <Route path={routes.dashboard.users}>
                <DashboardUserManagementScreen />
              </Route>
              <Route path={routes.dashboard.contact}>
                <DashboardContactScreen />
              </Route>
              <Route path={routes.dashboard.faq}>
                <DashboardFaqScreen />
              </Route>
              <Route path={routes.dashboard.profile}>
                <DashboardProfileScreen />
              </Route>
              <Route path={routes.dashboard.support}>
                <DashboardSupportScreen />
              </Route>
              <Redirect to={routes.dashboard.events} />
            </Switch>
          </View>
        </Grid>
      </Grid>
    </>
  );
};

const styles: Styles = {
  container: {
    display: 'block',
    flex: '1 0 auto',
  },
  dashboardWrap: {
    top: 0,
    left: 0,
  },
  tabPanel: {
    width: '100%',
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    dashboardBody: {
      width: '100%',
      padding: 0,
      top: 0,
      left: 0,
      [theme.breakpoints.up('md')]: {
        padding: '40px 45px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '70px 80px',
      },
    },
  })();

export type DashboardScreensProps = Props;
export default DashboardScreens;
