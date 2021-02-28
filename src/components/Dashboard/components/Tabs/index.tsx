import { Tab, Tabs } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import React, { ChangeEvent, FC } from 'react';
import { StyleProps } from 'styles';
import { genId } from 'utils';

interface Props extends StyleProps {
  tabsLabels: string[];
  tabValue: number;
  className?: string;
  icons?: Array<LineAwesomeIconType>;
  onTabChange: (e: ChangeEvent<unknown>, newValue: number) => void;
}

export const DashboardTabs: FC<Props> = ({ tabsLabels, tabValue = 0, className, icons, onTabChange }) => {
  const handleTabClick = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  const renderTabs = tabsLabels.map((tabLabel, tabIndex) => {
    const icon = icons ? <LineAwesomeIcon type={icons[tabIndex]} /> : undefined;

    return <Tab key={genId()} label={tabLabel} {...handleTabClick(tabIndex)} icon={icon} />;
  });

  return (
    <Tabs className={className} value={tabValue} onChange={onTabChange}>
      {renderTabs}
    </Tabs>
  );
};

export type DashboardTabsProps = Props;
export default DashboardTabs;
