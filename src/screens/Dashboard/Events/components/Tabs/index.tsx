import { makeStyles, Tab, Tabs, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import React, { FC, ChangeEvent } from 'react';
import { colors, mc, mx, StyleProps } from 'styles';

interface Props extends StyleProps {
  tabValue: number;
  className?: string;
  onTabChange: (e: ChangeEvent<unknown>, newValue: number) => void;
}

export const EventsTabs: FC<Props> = ({ tabValue = 0, className, onTabChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabClick = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  return (
    <Tabs className={mc(classes.container, className)} value={tabValue} onChange={onTabChange}>
      <Tab label={'upcoming'} {...handleTabClick(0)} />
      {!isMobile && <Tab label={'archived'} {...handleTabClick(1)} disabled={true} />}
      <Tab label={'explore'} {...handleTabClick(2)} disabled={true} />
      <Tab label={'liked'} {...handleTabClick(3)} disabled={true} />
    </Tabs>
  );
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
