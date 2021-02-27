import { View, ScreenTitle, TabPanel } from 'components/Common';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Styles, StyleProps, srollToTop } from 'styles';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'core/api';
import { routes } from 'screens/consts';
import { DashboardAppBar, DashboardEvents } from 'components/Dashboard';

type Props = StyleProps;

export const DashboardScreen: FC<Props> = ({ style }) => {
  useEffect(() => {
    srollToTop();
  }, []);

  const [tabPanelValue, setTabPanelValue] = useState<number>(0);

  const history = useHistory();
  const { signOut } = useAuth();

  const handleLogoutClick = () => {
    signOut();
    history.push({ pathname: routes.signin });
  };

  const onTabClick = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleTabPanelChange = (e: ChangeEvent<unknown>, newValue: number) => {
    e.preventDefault();
    setTabPanelValue(newValue);
  };

  return (
    <>
      <ScreenTitle title="Dashboard" />
      <DashboardAppBar
        tabValue={tabPanelValue}
        onTabChange={handleTabPanelChange}
        onLogoClick={() => history.push({ pathname: routes.dashboard })}
        onLogoutClick={handleLogoutClick}
        onTabClick={onTabClick}
      />
      <View style={[styles.container, style]} column={true} justifyContent="center" alignItems="center">
        <TabPanel style={styles.tabPanel} value={tabPanelValue} index={0}>
          <DashboardEvents />
        </TabPanel>
        <TabPanel value={tabPanelValue} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={tabPanelValue} index={2}>
          Item Three
        </TabPanel>
      </View>
    </>
  );
};

const styles: Styles = {
  container: {
    padding: '70px 80px',
  },
  tabPanel: {
    width: '100%',
  },
};

export type DashboardScreenProps = Props;
export default DashboardScreen;
