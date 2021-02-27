import { makeStyles, Tab, Tabs, Theme, useTheme } from '@material-ui/core';
import React, { ChangeEvent, FC } from 'react';
import { colors, mx } from 'styles';
import { genId } from 'utils';

interface Props {
  tabValue: number;
  onTabChange: (e: ChangeEvent<unknown>, newValue: number) => void;
  onTabClick: (value: number) => void;
}

export const DashboardTabs: FC<Props> = ({ tabValue = 0, onTabChange, onTabClick }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const renderTabs = ['Events', 'Analytics', 'User Management'].map((tabLabel, tabIndex) => {
    return <Tab key={genId()} className={classes.mainItem} label={tabLabel} {...onTabClick(tabIndex)} />;
  });

  return (
    <Tabs value={tabValue} onChange={onTabChange}>
      {renderTabs}
    </Tabs>
  );
};

export const useStyles = (theme: Theme) =>
  makeStyles({
    mainItem: {
      padding: '0 18px',
      [theme.breakpoints.up('md')]: {
        ...mx.borderRight(1, 'solid', colors.lightBlueGrey),
        padding: '0 20px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '0 61px',
      },
    },
  })();

export default DashboardTabs;
