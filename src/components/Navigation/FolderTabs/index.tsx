import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { View } from 'components/Common';
import React, { ChangeEvent, FC, ReactNode, useState } from 'react';
import { colors, StyleProps } from 'styles';

import TabPanel from './components/TabPanel';
import { useStyles } from './styles';

interface Props extends StyleProps {
  values: TabValue[];
}

interface TabValue {
  id: number;
  name: string;
  content: ReactNode;
}

export const FolderTabs: FC<Props> = ({ values, style }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const getA11yProps = (index: number) => {
    return {
      id: `folder-tab-${index}`,
      'aria-controls': `folder-tabpanel-${index}`,
    };
  };

  const classes = useStyles();

  return (
    <View style={style}>
      <ThemeProvider theme={theme}>
        <AppBar className={classes.container} position="static">
          <Tabs
            TabIndicatorProps={{ style: { background: colors.white } }}
            className={classes.tabs}
            value={value}
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
          <TabPanel key={el.id} value={value} index={el.id}>
            <div className={classes.blockContent}>{el.content}</div>
          </TabPanel>
        ))}
      </div>
    </View>
  );
};

const theme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        fontSize: 20,
        letterSpacing: 3,
        fontWeight: 600,
        maxWidth: '20%',
        padding: 0,
        '&.Mui-selected': {
          background: `${colors.white}`,
          color: `${colors.coolBlueTwo}`,
          boxShadow: `0 0 10px 0 ${colors.silver};`,
        },
      },
    },
  },
});

export type FolderTabsProps = Props;
export default FolderTabs;
