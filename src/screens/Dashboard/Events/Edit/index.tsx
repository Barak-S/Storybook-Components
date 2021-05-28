import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { VerticalSplitter } from 'components/Data';
import { SidebarTabs, SideTab } from 'components/Navigation/SidebarTabs';
import { ScreenFooter, ScreenTitle } from 'components/Screen';
import React, { FC } from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import { routes } from 'screens/consts';
import SetupSession from 'screens/Dashboard/Session';
import EventProfile from './Profile';
import EventSettings from './Settings';
import { colors, StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardEventsEditScreen: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const tabs: SideTab[] = [
    {
      index: 0,
      label: 'Profile',
      link: '/profile',
      icon: 'passport',
    },
    {
      index: 1,
      label: 'Settings',
      link: '/settings',
      icon: 'cog',
    },
    {
      index: 2,
      label: 'Registration',
      link: '/registration',
      icon: 'clipboard-list',
    },
    {
      index: 3,
      label: 'Session',
      link: '/sessions',
      icon: 'calendar-plus',
    },
    {
      index: 4,
      label: 'Sponsor',
      link: '/sponsors',
      icon: 'thumbs-up',
    },
  ];

  const { id: eventId } = useParams<{ id: string }>();

  return (
    <>
      <ScreenTitle />
      <div className={classes.container}>
        <SidebarTabs tabs={tabs} initialRoute={routes.dashboard.events.getEdit(eventId)}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div className={classes.eventSettingsBanner}>
              <span className={classes.banner}>{'Event Settings'}</span>
              <div className={classes.eventOverview}>
                <span className={classes.eventTitle}>{'VR/AR Discovery Conference'}</span>
                <VerticalSplitter style={{ height: '100%', paddingLeft: 15 }} />
                <span className={classes.eventDate}>{'June 9-12 • 2021'}</span>
              </div>
            </div>
            <div className={classes.content}>
              <Switch>
                <Route path={routes.dashboard.events.getEditProfile(eventId)} render={() => <EventProfile />} />
                <Route path={routes.dashboard.events.getEditSettings(eventId)} render={() => <EventSettings />} />
                <Route
                  path={routes.dashboard.events.getEditRegistration(eventId)}
                  render={() => <div>{'Edit Registration Page'}</div>}
                />
                <Route path={routes.dashboard.events.getEditSessions(eventId)} render={() => <SetupSession />} />
                <Route path={routes.dashboard.events.getEditSponsors(eventId)} render={() => <div>{'Edit Sponsors Page'}</div>} />
                <Redirect to={routes.dashboard.events.getEditProfile(eventId)} />
              </Switch>
            </div>
          </div>
        </SidebarTabs>
      </div>
      <ScreenFooter theme="light" />
    </>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      width: '100%',
    },
    eventSettingsBanner: {
      height: 91,
      width: '100%',
      backgroundColor: colors.whiteTwo,
      boxShadow: '0px 3px 4px #0000001D',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    content: {
      padding: 41,
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'center',
    },
    banner: {
      color: colors.warmPurple,
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.96px',
      paddingLeft: 41,
    },
    eventOverview: {
      display: 'flex',
      flexDirection: 'row',
    },
    eventTitle: {
      color: colors.marineBlue,
      fontSize: 22,
      fontWeight: 500,
      paddingLeft: 41,
    },
    eventDate: {
      color: colors.coolBlue,
      fontSize: 22,
      letterSpacing: '1.32px',
      paddingLeft: 12.5,
      fontWeight: 500,
    },
  })();

export default DashboardEventsEditScreen;
