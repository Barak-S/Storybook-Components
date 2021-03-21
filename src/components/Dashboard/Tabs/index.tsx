import { makeStyles, Tab, Tabs, Theme, useTheme } from '@material-ui/core';
import React, { ChangeEvent, FC } from 'react';
import { colors, mc, mx, StyleProps } from 'styles';

interface Props extends StyleProps {
  className?: string;
  tabs: DasbhoardTab[];
  tab?: number;
  onTabChange: (e: ChangeEvent<unknown>, newValue: number) => void;
}

export interface DasbhoardTab {
  label: string;
  index: number;
  disabled?: boolean;
  visible?: boolean;
}

export const DashboardTabs: FC<Props> = ({ style, tab = 0, tabs, className, onTabChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleTabClick = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  return (
    <Tabs style={style} className={mc(classes.container, className)} value={tab} onChange={onTabChange}>
      {tabs.map(({ label, index, disabled = false, visible = true }) => (
        <Tab
          key={index}
          data-index={index}
          label={label}
          disabled={disabled}
          {...handleTabClick(index)}
          style={{ ...(!visible && { display: 'none' }) }}
        />
      ))}
    </Tabs>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      '& .MuiTabs-indicator': {
        top: 0,
        height: 5,
        borderRadius: 50,
        background: colors.windowsBlue,
        [theme.breakpoints.up('md')]: {
          display: 'block',
          bottom: 0,
          transform: 'translateY(1px)',
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

export default DashboardTabs;
