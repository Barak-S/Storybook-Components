import { Grid, Hidden } from '@material-ui/core';
import { ScreenTitle } from 'components/Common';
import { DashboardScreenContainer, DashboardTabPanel, DashboardUserNav, DashboardUserNavBtnType } from 'components/Dashboard';
import { LineTab, LineTabs } from 'components/Navigation';
import { useAuth } from 'core';
import React, { FC, useState } from 'react';
import { useSelector } from 'store';
import { colors, ms, mx, StyleProps, Styles, useScreenSizes } from 'styles';

import DashboardEmailConfirmScene from './scenes/EmailConfirm';
import FirstEventSetup from './scenes/FirstEventSetup';
import DashboardEventsListScene from './scenes/List';

interface Props extends StyleProps {
  handleUseNavBtnClick?: (btn: DashboardUserNavBtnType) => void;
}

export const DashboardEventsScreen: FC<Props> = ({ handleUseNavBtnClick }) => {
  const [tab, setTab] = useState<number>(0);
  const { confirmed } = useAuth();
  const onboarding = useSelector(s => s.profile.data?.onboarding);

  // Render

  const { isMobile, whenMobile } = useScreenSizes();

  const tabs: LineTab[] = [
    {
      index: 0,
      label: 'Upcoming',
    },
    {
      index: 1,
      label: 'Archive',
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
  ];

  const renderTabs = () => (
    <LineTabs tabs={tabs} tab={tab} indicatorPosition={isMobile ? 'top' : 'bottom'} onChange={(_e, val) => setTab(val)} />
  );

  return (
    <>
      <ScreenTitle />
      <DashboardScreenContainer style={styles.container}>
        <Hidden smDown>{renderTabs()}</Hidden>
        <Grid>
          <DashboardTabPanel style={ms(styles.tabPanel, whenMobile(styles.tabPanelMob))} value={tab} index={0}>
            {!confirmed ? <DashboardEmailConfirmScene /> : onboarding !== 'done' ? <FirstEventSetup /> : null}
            {onboarding === 'done' && <DashboardEventsListScene />}
            <Hidden smDown>
              <DashboardUserNav disabledBtns={!confirmed ? ['add'] : []} onBtnClick={handleUseNavBtnClick} />
            </Hidden>
          </DashboardTabPanel>
          <DashboardTabPanel style={ms(styles.tabPanel, whenMobile(styles.tabPanelMob))} value={tab} index={1}>
            {tabs[1].label}
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
    </>
  );
};

const styles: Styles = {
  container: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: colors.brownGrey,
  },
  mobileTabsWrap: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    ...mx.zIndex.mobileTabs,
  },
  tabPanel: {
    padding: '35px 0',
  },
  tabPanelMob: {
    padding: 0,
  },
};

export default DashboardEventsScreen;
