import { Grid, Tab, Tabs, useTheme } from '@material-ui/core';
import React, { ChangeEvent, FC, useState } from 'react';
import { StyleProps } from 'styles';
import { genId } from 'utils';
import { makeStyles, Theme } from '@material-ui/core';
import { colors, mx, Styles } from 'styles';
import { TabPanel } from 'components/Common';

type Props = StyleProps;

export const DashboardEvents: FC<Props> = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const handleTabClick = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  const renderTabs = ['upcoming', 'archive', 'explore', 'liked'].map((tabLabel, tabIndex) => {
    return <Tab key={genId()} label={tabLabel} {...handleTabClick(tabIndex)} />;
  });

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid className={classes.container}>
      <Tabs value={value} onChange={handleChange}>
        {renderTabs}
      </Tabs>
      <Grid>
        <TabPanel value={value} index={0}>
          Event one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Event Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Event Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Event Four
        </TabPanel>
      </Grid>
    </Grid>
  );
};

const useStyles = (_theme: Theme) =>
  makeStyles({
    container: {
      width: '100%',
      fontSize: 16,
      textTransform: 'uppercase',
      color: colors.brownGrey,
      '& .MuiTabs-indicator': {
        height: 5,
        borderRadius: 50,
        transform: 'translateY(1px)',
        background: colors.windowsBlue,
      },
      '& .MuiTab-root': {
        padding: '0 22px',
        minWidth: 'initial',
        ...mx.borderBottom(2, 'solid', colors.lightPeriwinkle),
        letterSpacing: 1.28,
      },
      '& .Mui-selected': {
        color: colors.windowsBlue,
      },
    },
  })();

export default DashboardEvents;
