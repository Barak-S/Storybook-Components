import { Grid, Hidden, makeStyles, Theme, useTheme } from '@material-ui/core';
import React, { ChangeEvent, FC, useState } from 'react';
import { colors, Styles, mx, StyleProps } from 'styles';
import TabPanel from '../TabPanel';
import DashboardUsernavigation from '../UserNavigation';

import DashBoardEmailConfirmationMessage from '../EmailConfirmationMessage';
import EventsTabs from './components/Tabs';

const isEmailConfirmed = false;

type Props = StyleProps;

export const DashboardEvents: FC<Props> = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  const eventTabs = <EventsTabs tabValue={value} onTabChange={handleChange} />;

  return (
    <Grid style={styles.container}>
      <Hidden smDown>{eventTabs}</Hidden>
      <Grid>
        <TabPanel className={classes.tabPanel} value={value} index={0}>
          {!isEmailConfirmed && <DashBoardEmailConfirmationMessage />}
          <Hidden smDown>
            <DashboardUsernavigation emailConfirmed={false} />
          </Hidden>
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={1}>
          {!isEmailConfirmed && <DashBoardEmailConfirmationMessage />}
          <Hidden smDown>
            <DashboardUsernavigation emailConfirmed={false} />
          </Hidden>
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={2}>
          {!isEmailConfirmed && <DashBoardEmailConfirmationMessage />}
          <Hidden smDown>
            <DashboardUsernavigation emailConfirmed={false} />
          </Hidden>
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={3}>
          {!isEmailConfirmed && <DashBoardEmailConfirmationMessage />}
          <Hidden smDown>
            <DashboardUsernavigation emailConfirmed={false} />
          </Hidden>
        </TabPanel>
      </Grid>
      <Hidden mdUp>
        <Grid className={classes.mobileTabs}>{eventTabs}</Grid>
      </Hidden>
    </Grid>
  );
};

const styles: Styles = {
  container: {
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

export default DashboardEvents;
