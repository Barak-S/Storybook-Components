import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ScreenTitle, View } from 'components/Common';
import { DashboardAppBar, DashboardEvents, DashboardMenu, TabPanel } from 'components/Dashboard';
import { useAuth } from 'core/api';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import { m, srollToTop, StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const DashboardScreen: FC<Props> = () => {
  useEffect(() => {
    srollToTop();
  }, []);

  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);
  const [tabPanelValue, setTabPanelValue] = useState<number>(0);

  const history = useHistory();
  const { signOut } = useAuth();

  const handleLogoutClick = () => {
    signOut();
    history.push({ pathname: routes.signin });
  };

  const handleTabPanelChange = (e: ChangeEvent<unknown>, newValue: number) => {
    e.preventDefault();
    setTabPanelValue(newValue);
  };

  const handleToggleMobileMenu = () => {
    setMobileMenuVisible(mobileMenuVisible => !mobileMenuVisible);
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <Grid container style={styles.container}>
        <ScreenTitle title="Dashboard" />
        {mobileMenuVisible && (
          <DashboardMenu
            open={mobileMenuVisible}
            tabValue={tabPanelValue}
            onTabChange={handleTabPanelChange}
            onClose={handleToggleMobileMenu}
            onLogoutClick={handleLogoutClick}
          />
        )}
        <Grid container style={m(styles.dashboardWrap, { position: mobileMenuVisible ? 'absolute' : 'initial' })}>
          <DashboardAppBar
            tabValue={tabPanelValue}
            onTabChange={handleTabPanelChange}
            onLogoClick={() => history.push({ pathname: routes.dashboard })}
            onLogoutClick={handleLogoutClick}
            onMobileMenuClick={handleToggleMobileMenu}
          />
          <View className={classes.dashboardBody} column={true} justifyContent="center" alignItems="center">
            <TabPanel style={styles.tabPanel} value={tabPanelValue} index={0}>
              <DashboardEvents />
            </TabPanel>
            <TabPanel value={tabPanelValue} index={1}>
              {'Item Two'}
            </TabPanel>
            <TabPanel value={tabPanelValue} index={2}>
              {'Item Three'}
            </TabPanel>
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
        padding: '70px 80px',
      },
    },
  })();

export type DashboardScreenProps = Props;
export default DashboardScreen;
