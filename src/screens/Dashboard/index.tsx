import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { View } from 'components/Common';
import { DashboardAppBar, DashboardAppBarBtn, DashboardMobileMenu, DashboardUserNavBtnType } from 'components/Dashboard';
import { ScreenTitle } from 'components/Screen';
import { Log } from 'core';
import { useAuth } from 'core/auth';
import React, { FC, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { useSelector, useStoreManager } from 'store';
import { ms, scrollToTop, StyleProps, Styles } from 'styles';

import DashboardAnalyticsScreen from './Analytics';
import DashboardContactScreen from './Contact';
import DashboardEventsEditScreen from './Events/Edit';
import DashboardEventsListScreen from './Events/List';
import DashboardFaqScreen from './Faq';
import OnboardingScreens from './Onboarding';
import DashboardPolicyScreen from './Policy';
import DashboardProfileScreen from './Profile';
import DashboardSupportScreen from './Support';
import DashboardTermsScreen from './Terms';
import DashboardUserManagementScreen from './UserManagement';

type Props = StyleProps;

export const DashboardScreens: FC<Props> = () => {
  const history = useHistory();

  useEffect(() => {
    history.listen(() => scrollToTop('auto'));
  }, []);

  const user = useSelector(s => s.user.data);

  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<DashboardAppBarBtn>('events');

  const theme = useTheme();
  const classes = useStyles(theme);
  const { signOut } = useAuth();
  const manager = useStoreManager();

  const handleLogoutClick = () => {
    signOut();
    manager.auth.signOut();
    history.push({ pathname: routes.auth.signin });
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuVisible(mobileMenuVisible => !mobileMenuVisible);
  };

  const barBtnToRoute = (name: DashboardAppBarBtn) => {
    switch (name) {
      case 'events':
        return routes.dashboard.events.list;
      case 'analytics':
        return routes.dashboard.analytics;
      case 'users':
        return routes.dashboard.users;
      case 'profile':
        return routes.dashboard.profile;
      case 'notes':
        return routes.dashboard.notes;
    }
  };

  const handleAppBarMenuBtnClick = (name: DashboardAppBarBtn) => {
    history.push({ pathname: barBtnToRoute(name) });
  };

  const log = Log('screens.DashboardEvents');

  const handleUseNavBtnClick = (btn: DashboardUserNavBtnType) => {
    log.debug('hanlde user nav btn click, btn=', btn);
    switch (btn) {
      case 'contact':
        return history.push({ pathname: routes.dashboard.contact });
      case 'faq':
        return history.push({ pathname: routes.faq });
      case 'profile':
        return history.push({ pathname: routes.dashboard.profile });
      case 'support':
        return history.push({ pathname: routes.dashboard.support });
    }
  };

  return (
    <>
      <ScreenTitle title="Dashboard" />
      <Grid container style={styles.container}>
        {mobileMenuVisible && (
          <DashboardMobileMenu
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            open={mobileMenuVisible}
            onClose={handleToggleMobileMenu}
            onLogoutClick={handleLogoutClick}
            onMenuBtnClick={handleAppBarMenuBtnClick}
            handleUseNavBtnClick={handleUseNavBtnClick}
          />
        )}
        <Grid
          container
          className={classes.dashboardWrap}
          style={ms(styles.dashboardWrap, { position: mobileMenuVisible ? 'absolute' : 'initial' })}
        >
          {!!user && (
            <DashboardAppBar
              user={user}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onLogoClick={() => history.push({ pathname: routes.dashboard.index })}
              onLogoutClick={handleLogoutClick}
              onMobileMenuClick={handleToggleMobileMenu}
              onMenuBtnClick={handleAppBarMenuBtnClick}
            />
          )}
          <View style={styles.dashboardBody} column justifyContent="flex-start" alignItems="center">
            <Switch>
              <Route path={routes.dashboard.events.edit}>
                <DashboardEventsEditScreen />
              </Route>
              <Route path={routes.dashboard.events.list}>
                <DashboardEventsListScreen handleUseNavBtnClick={handleUseNavBtnClick} />
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
              <Route path={routes.dashboard.profile}>
                <DashboardProfileScreen />
              </Route>
              <Route path={routes.dashboard.support}>
                <DashboardSupportScreen />
              </Route>
              <Route path={routes.terms}>
                <DashboardTermsScreen />
              </Route>
              <Route path={routes.policy}>
                <DashboardPolicyScreen />
              </Route>
              <Route path={routes.faq}>
                <DashboardFaqScreen />
              </Route>
              <OnboardingScreens />
              <Redirect to={routes.dashboard.events.list} />
            </Switch>
          </View>
        </Grid>
      </Grid>
    </>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    flex: '1 0 auto',
  },
  tabPanel: {
    width: '100%',
  },
  dashboardBody: {
    width: '100%',
    padding: 0,
    top: 0,
    left: 0,
    flex: '1 0 auto',
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    dashboardWrap: {
      top: 0,
      left: 0,
      flexDirection: 'column',
      flex: '1 0 auto',
      paddingTop: 60,
      [theme.breakpoints.up('md')]: {
        paddingTop: 69,
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: 73,
      },
    },
  })();

export type DashboardScreensProps = Props;
export default DashboardScreens;
