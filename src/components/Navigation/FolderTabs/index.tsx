import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { View } from 'components/Common';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import { colors, StyleProps } from 'styles';

import TabPanel from './components/TabPanel';
import { useStyles } from './styles';

interface Props extends StyleProps {
  values: TabValue[];
  currentTab?: number | undefined;
  onChange?: (newVal: number) => void;
}

interface TabValue {
  id: number;
  name: string;
  content: ReactNode;
}

export const FolderTabs: FC<Props> = ({ values, currentTab, onChange, style }) => {
  const handleChange = (_event: ChangeEvent<unknown>, newValue: number) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  const getA11yProps = (index: number) => {
    return {
      id: `folder-tab-${index}`,
      'aria-controls': `folder-tabpanel-${index}`,
    };
  };
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <View style={style}>
      <ThemeProvider theme={overrides}>
        <AppBar className={classes.container} position="static">
          <Tabs
            classes={{ root: classes.root }}
            TabIndicatorProps={{ style: { background: colors.white } }}
            className={classes.tabs}
            value={currentTab}
            onChange={handleChange}
          >
            {values.map(el => (
              <Tab key={el.id} className={classes.tab} label={el.name} {...getA11yProps(el.id)} />
            ))}
          </Tabs>
        </AppBar>
      </ThemeProvider>
      <div className={classes.content}>
        {values.map(el => (
          <TabPanel key={el.id} value={currentTab || 0} index={el.id}>
            <div className={classes.blockContent}>{el.content}</div>
          </TabPanel>
        ))}
      </div>
    </View>
  );
};

const overrides = createMuiTheme({
  overrides: {
    MuiTabs: {
      root: {
        overflow: 'visible',
      },
    },
    MuiTab: {
      root: {
        letterSpacing: 3,
        fontWeight: 600,
        maxWidth: '20%',
        padding: 0,
        '&.Mui-selected': {
          background: `${colors.white}`,
          color: `${colors.steal}`,
          boxShadow: `0 -3px 4px -1px ${colors.silver};`,
          '&:first-child': {
            boxShadow: ` -1.5px -3px 4px -1px ${colors.silver};`,
          },
          '&:last-child': {
            boxShadow: ` 1.5px -3px 4px -1px ${colors.silver};`,
          },
        },
      },
    },
  },
});

export type FolderTabsProps = Props;
export default FolderTabs;
