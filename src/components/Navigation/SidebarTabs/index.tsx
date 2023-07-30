import React, { useState, FC, useEffect } from 'react';
import { colors, StyleProps } from 'styles';
import { CssBaseline, List, ListItemText, Hidden, Drawer } from '@material-ui/core';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';

const drawerWidth = 271.5;

interface Props extends StyleProps {
  tabs: Tab[];
  initialRoute: string;
  thumbnail?: string;
}

interface Tab {
  label: string;
  index: number;
  link?: string;
  icon?: LineAwesomeIconType;
  disabled?: boolean;
  type?: TabType;
}

type TabType = 'backLink';

export const SidebarTabs: FC<Props> = ({ tabs, initialRoute, thumbnail, children }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);

  const drawer = (
    <div>
      {tabs.map(
        tab =>
          tab.type === 'backLink' && (
            <NavLink key={tab.label} to={`${tab.link}`} className={classes.backLink}>
              {tab.icon && <LineAwesomeIcon type={tab.icon} size={24} color={colors.brownGrey} />}
              <ListItemText primary={tab.label} className={classes.sidebarLinkLabel} />
            </NavLink>
          ),
      )}
      <div
        className={classes.sidebarThumbnail}
        style={{
          backgroundImage: thumbnail ? `url(${thumbnail})` : undefined,
          height: thumbnail ? 168 : 0,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <List className={classes.navList}>
        {tabs.map(
          tab =>
            !tab.type && (
              <NavLink
                key={tab.index}
                style={{ color: colors.brownGrey }}
                className={classes.sidebarLink}
                activeStyle={{ color: colors.textGray }}
                to={`${initialRoute}${tab.link}`}
                isActive={(match, location) => {
                  if (match) {
                    setActiveLink(tab.index);
                    return true;
                  } else {
                    return false;
                  }
                }}
              >
                {tab.icon && (
                  <LineAwesomeIcon type={tab.icon} size={24} color={activeLink === tab.index ? colors.steal : colors.brownGrey} />
                )}
                <ListItemText primary={tab.label} className={classes.sidebarLinkLabel} />
              </NavLink>
            ),
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    sidebarThumbnail: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    backLink: {
      height: 54,
      fontSize: 16,
      color: colors.brownGrey,
      display: 'flex',
      textDecoration: 'none',
      alignItems: 'center',
      paddingLeft: 21,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 19,
      },
    },
    navList: {
      padding: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      zIndex: 1,
      top: 73,
      [theme.breakpoints.down('md')]: {
        top: 69,
        width: 206,
      },
      [theme.breakpoints.down('sm')]: {
        top: 61,
        width: 65,
      },
    },
    content: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: 'auto',
      minHeight: 'calc(100vh - 73px)',
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        width: `calc(100% - 206px)`,
      },
      [theme.breakpoints.down('sm')]: {
        width: `calc(100% - 61px)`,
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        width: '100%',
      },
    },
    sidebarLink: {
      borderTop: `1px solid ${colors.silverTwo}`,
      display: 'flex',
      textDecoration: 'none',
      alignItems: 'center',
      height: 64,
      paddingLeft: 24,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 19,
      },
    },
    sidebarLinkLabel: {
      fontSize: 16,
      paddingLeft: 7,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }),
);

export type SideTab = Tab;
export type SideTabsProps = Props;
export default SidebarTabs;
