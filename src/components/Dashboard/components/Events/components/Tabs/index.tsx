import { makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { DashboardTabs, DashboardTabsProps } from 'components/Dashboard';
import React, { FC, useEffect, useState } from 'react';
import { colors, mx } from 'styles';

type Props = Omit<DashboardTabsProps, 'tabsLabels' | 'className'>;

export const EventsTabs: FC<Props> = props => {
  const mobileTabLabels = ['upcoming', 'explore', 'liked'];
  const [tabsLabels, setTabsLabels] = useState<Array<string>>(mobileTabLabels);
  const theme = useTheme();
  const classes = useStyles(theme);
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const updatedTabLabels = tabsLabels.slice();

  useEffect(() => {
    if (matches && updatedTabLabels.length === mobileTabLabels.length) {
      updatedTabLabels.splice(1, 0, 'archived');
    }

    if (!matches && updatedTabLabels.length === mobileTabLabels.length + 1) {
      updatedTabLabels.splice(1, 1);
    }

    setTabsLabels(updatedTabLabels);
  }, [matches, setTabsLabels]);

  return <DashboardTabs {...props} className={classes.container} tabsLabels={tabsLabels} />;
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      '& .MuiTabs-indicator': {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'block',
          height: 5,
          borderRadius: 50,
          transform: 'translateY(1px)',
          background: colors.windowsBlue,
        },
      },
      '& .MuiTab-root': {
        padding: '0 10px',
        minWidth: 'initial',
        ...mx.borderBottom(2, 'solid', colors.lightPeriwinkle),
        letterSpacing: 1.28,
        [theme.breakpoints.up('sm')]: {
          padding: '0 22px',
        },
      },
      '& .Mui-selected': {
        color: colors.windowsBlue,
      },
      '& .MuiTabs-flexContainer': {
        [theme.breakpoints.down('sm')]: {
          alignItems: 'center',
          justifyContent: 'space-around',
          background: colors.paleGrey,
        },
      },
    },
  })();

export default EventsTabs;
