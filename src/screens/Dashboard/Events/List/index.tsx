import { Grid, Hidden } from '@material-ui/core';
import { DashboardScreenContainer, DashboardTabPanel, DashboardUserNav, DashboardUserNavBtnType } from 'components/Dashboard';
import { EventsListItem } from 'components/Event';
import { LineTab, LineTabs } from 'components/Navigation';
import { ScreenFooter, ScreenTitle } from 'components/Screen';
import { useAuth } from 'core';
import React, { FC, useEffect, useState } from 'react';
import { useSelector, useStoreManager } from 'store';
import { colors, ms, mx, StyleProps, Styles, useScreenSizes } from 'styles';

import DashboardEmailConfirmScene from './scenes/EmailConfirm';
import FirstEventSetup from './scenes/FirstEventSetup';
import DashboardEventsListScene from './scenes/List';

interface Props extends StyleProps {
  handleUseNavBtnClick?: (btn: DashboardUserNavBtnType) => void;
}

export const DashboardEventsListScreen: FC<Props> = ({ handleUseNavBtnClick }) => {
  const [tab, setTab] = useState<number>(0);
  const { confirmed } = useAuth();
  const manager = useStoreManager();
  const onboarding = useSelector(s => s.user.settings.onboarding);

  useEffect(() => {
    manager.events.updateItems();
  }, []);

  // Render

  const { isMobile, whenMobile } = useScreenSizes();

  const tabs: LineTab[] = [
    {
      index: 0,
      label: 'Hosted',
    },
    {
      index: 1,
      label: 'Attending',
      disabled: !confirmed,
      visible: !isMobile,
    },
    {
      index: 2,
      label: 'Explore',
      disabled: !confirmed,
    },
    {
      index: 3,
      label: 'Liked',
      disabled: !confirmed,
    },
    {
      index: 4,
      label: 'Past',
      disabled: !confirmed,
    },
  ];

  const renderTabs = () => (
    <LineTabs
      tabs={tabs}
      tab={tab}
      indicatorPosition={isMobile ? 'top' : 'bottom'}
      style={{ height: '48px' }}
      onChange={(_e, val) => setTab(val)}
    />
  );

  return (
    <>
      <ScreenTitle />
      <DashboardScreenContainer style={styles.container}>
        <Hidden smDown>{renderTabs()}</Hidden>
        <Grid>
          <DashboardTabPanel style={ms(styles.tabPanel, whenMobile(styles.tabPanelMob))} value={tab} index={0}>
            {!confirmed ? (
              <DashboardEmailConfirmScene />
            ) : onboarding !== 'done' ? (
              <FirstEventSetup />
            ) : (
              <EventsListItem id="OfJJswdGKjRw" />
            )}
            {onboarding === 'done' && <DashboardEventsListScene />}
            <Hidden smDown>
              <DashboardUserNav disabledBtns={!confirmed ? ['add'] : []} onBtnClick={handleUseNavBtnClick} />
            </Hidden>
          </DashboardTabPanel>
          <DashboardTabPanel style={ms(styles.tabPanel, whenMobile(styles.tabPanelMob))} value={tab} index={1}>
            <EventsListItem id="OfJJswdGKjRw" />
          </DashboardTabPanel>
          <DashboardTabPanel style={ms(styles.tabPanel, whenMobile(styles.tabPanelMob))} value={tab} index={2}>
            {tabs[2].label}
          </DashboardTabPanel>
          <DashboardTabPanel style={ms(styles.tabPanel, whenMobile(styles.tabPanelMob))} value={tab} index={3}>
            {tabs[3].label}
          </DashboardTabPanel>
        </Grid>
        <Hidden mdUp>
          <Grid style={styles.mobileTabsWrap}>{renderTabs()}</Grid>
        </Hidden>
      </DashboardScreenContainer>

      <ScreenFooter theme="light" />
    </>
  );
};

const styles: Styles = {
  container: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: colors.brownGrey,
    minHeight: 'calc(100vh - 60px)',
  },
  mobileTabsWrap: {
    width: '100%',
    ...mx.zIndex.mobileTabs,
    marginTop: 'auto',
  },
  tabPanel: {
    padding: '35px 0',
  },
  tabPanelMob: {
    padding: 0,
  },
};

export default DashboardEventsListScreen;
