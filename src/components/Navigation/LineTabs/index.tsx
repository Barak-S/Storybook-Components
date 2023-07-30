import { makeStyles, Tab as MaterialTab, Tabs as MaterialTabs, Theme, useTheme } from '@material-ui/core';
import React, { ChangeEvent, FC } from 'react';
import { colors, mc, ms, mx, StyleProps } from 'styles';

interface Props extends StyleProps {
  className?: string;
  tabs: Tab[];
  tab?: number;
  indicatorPosition?: 'top' | 'bottom';
  onChange: (e: ChangeEvent<unknown>, newValue: number) => void;
}

interface Tab {
  label: string;
  index: number;
  disabled?: boolean;
  visible?: boolean;
}

export const LineTabs: FC<Props> = ({ className, style, tab = 0, tabs, indicatorPosition = 'bottom', onChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <MaterialTabs
      style={style}
      className={mc(
        classes.container,
        indicatorPosition === 'top' && classes.indicatorTop,
        indicatorPosition === 'bottom' && classes.indicatorBottom,
        className,
      )}
      value={tab}
      onChange={onChange}
    >
      {tabs.map(({ label, index, disabled = false, visible = true }) => (
        <MaterialTab
          key={index}
          id={`full-width-tab-${index}`}
          style={ms(!visible && { display: 'none' })}
          data-index={index}
          label={label}
          disabled={disabled}
          aria-controls={`full-width-tabpanel-${index}`}
        />
      ))}
    </MaterialTabs>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      '& .MuiTabs-indicator': {
        height: 5,
        borderRadius: 50,
        background: colors.steal,
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
        color: colors.steal,
      },
      '& .MuiTabs-flexContainer': {
        [theme.breakpoints.down('sm')]: {
          alignItems: 'center',
          justifyContent: 'space-around',
          background: colors.paleGrey,
        },
      },
    },
    indicatorTop: {
      '& .MuiTabs-indicator': {
        top: 0,
      },
    },
    indicatorBottom: {
      '& .MuiTabs-indicator': {
        bottom: 0,
        display: 'block',
        transform: 'translateY(1px)',
      },
    },
  })();

export type LineTab = Tab;
export type LineTabsProps = Props;
export default LineTabs;
