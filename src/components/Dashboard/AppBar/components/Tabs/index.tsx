import { makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { DashboardTabs } from 'components/Dashboard';
import { LineAwesomeIconType } from 'components/Icons';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { colors, mx } from 'styles';

interface Props {
  tabValue: number;
  onTabChange: (e: ChangeEvent<unknown>, newValue: number) => void;
}

export const AppBarTabs: FC<Props> = props => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const theme = useTheme();
  const classes = useStyles(theme);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setIsMobile(matches);
  }, [matches, setIsMobile]);

  const tabsLabels = ['Events', 'Analytics', 'User Management'];
  const icons: LineAwesomeIconType[] | undefined = isMobile ? ['calendar-check', 'chart-line', 'id-card'] : undefined;

  return <DashboardTabs tabsLabels={tabsLabels} className={classes.container} icons={icons} {...props} />;
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      [theme.breakpoints.down('sm')]: {
        height: 'initial',
      },
      '& .MuiTabs-indicator': {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'inline-block',
        },
      },
      '& .MuiTabs-flexContainer': {
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
        },
      },
      '& .MuiTab-root': {
        padding: '0 18px',
        color: colors.brownGrey,
        ...mx.borderBottom(1, 'solid', colors.silver),
        [theme.breakpoints.up('md')]: {
          ...mx.borderRight(1, 'solid', colors.lightBlueGrey),
          padding: '0 20px',
          borderBottom: 'none',
        },
        [theme.breakpoints.up('lg')]: {
          padding: '0 61px',
        },
      },
      '& .MuiTab-wrapper': {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
          justifyContent: 'center',
        },
      },
      '& .Mui-selected': {
        color: colors.marineBlue,
        background: colors.white,
      },
      '& .MuiIcon-root': {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      '& .MuiTab-textColorInherit': {
        opacity: 1,
        [theme.breakpoints.up('md')]: {
          opacity: 0.7,
        },
      },
      '& .MuiTab-labelIcon': {
        minHeight: 60,
      },
    },
  })();

export type AppBarTabsProps = Props;
export default AppBarTabs;
