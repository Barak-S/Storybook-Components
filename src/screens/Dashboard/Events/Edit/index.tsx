import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { eventToDateStr } from 'components/Event/utils';
import { useSnackbar } from 'components/Feedback';
import { SidebarTabs, SideTab } from 'components/Navigation/SidebarTabs';
import { ScreenFooter, ScreenTitle } from 'components/Screen';
import { Log } from 'core';
import { Event, eventItemToUpdate, EventUpdate } from 'core/api';
import React, { FC, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useParams, useHistory } from 'react-router-dom';
import { routes } from 'screens/consts';
import EditSetupSession from 'screens/Dashboard/Session';
import { useSelector, useStoreManager } from 'store';
import { colors, scrollToTop, StyleProps } from 'styles';
import backgroundImg from 'screens/Dashboard/Events/List/assets/IrisBackgroundDash.svg';
import EditEventProfile from './Profile';
import EditEventSettings from './Settings';
import EditEventRegistration from './Registration';

const log = Log('screens.Dashboard.events.edit.profile');

type Props = StyleProps;

export const DashboardEventsEditScreen: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const history = useHistory();

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
    {
      index: 5,
      label: 'Event Dashboard',
      link: '/dashboard/events',
      icon: 'angle-left',
      type: 'backLink',
    },
  ];

  const { id: itemId } = useParams<{ id: string }>();
  const manager = useStoreManager();
  const { showSnackbar } = useSnackbar();

  const items = useSelector(s => s.events.items);
  const curItem = items.find(itm => itm.id === itemId);

  const themes = useSelector(s => s.events.themes);
  const curTheme = themes.find(itm => itm.id === curItem?.themeId);

  const [data, setData] = useState<EventUpdate>(eventItemToUpdate(curItem));
  const [processing, setProcessing] = useState<boolean>(false);

  useEffect(() => {
    if (!curItem) return history.push(routes.dashboard.index);
  }, [curItem]);

  const handleDataChange = (newData: Partial<Event>) => {
    setData(v => ({ ...v, ...newData }));
  };

  const handleSubmitClick = async () => {
    try {
      log.info('updating data');
      setProcessing(true);
      await manager.events.modifyItem(itemId, data);
      setProcessing(false);
      log.info('updating data done');
      showSnackbar('Event updated', 'success');
      scrollToTop();
    } catch (err: unknown) {
      log.err('updating data err=', err);
      setProcessing(false);
      showSnackbar('Updating event error', 'error');
    }
  };

  return (
    <>
      <ScreenTitle />
      <div className={classes.container}>
        <SidebarTabs thumbnail={curTheme?.thumbnail} tabs={tabs} initialRoute={routes.dashboard.events.getEdit(itemId)}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div className={classes.eventSettingsBanner}>
              {/* <span className={classes.banner}>{'Event Settings'}</span> */}
              <div className={classes.eventOverview}>
                <span className={classes.eventTitle}>{data.name}</span>
                <span className={classes.eventDate}>{eventToDateStr(data)}</span>
              </div>
            </div>
            <div className={classes.content}>
              <Switch>
                <Route
                  path={routes.dashboard.events.getEditProfile(itemId)}
                  render={() => (
                    <EditEventProfile
                      data={data}
                      processing={processing}
                      onChange={handleDataChange}
                      onSubmit={handleSubmitClick}
                    />
                  )}
                />
                <Route
                  path={routes.dashboard.events.getEditSettings(itemId)}
                  render={() => (
                    <EditEventSettings
                      data={data}
                      processing={processing}
                      onChange={handleDataChange}
                      onSubmit={handleSubmitClick}
                    />
                  )}
                />
                <Route
                  path={routes.dashboard.events.getEditRegistration(itemId)}
                  render={() => (
                    <EditEventRegistration
                      data={data}
                      onChange={handleDataChange}
                      processing={processing}
                      onSubmit={handleSubmitClick}
                    />
                  )}
                />
                <Route path={routes.dashboard.events.getEditSessions(itemId)} render={() => <EditSetupSession />} />
                <Route path={routes.dashboard.events.getEditSponsors(itemId)} render={() => <div>{'Edit Sponsors Page'}</div>} />
                <Redirect to={routes.dashboard.events.getEditProfile(itemId)} />
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
      height: 67,
      width: '100%',
      backgroundColor: colors.tint5,
      boxShadow: '0px 3px 6px #00000029',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
    },
    content: {
      padding: 41,
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: `url(${backgroundImg})`,
      objectFit: 'cover',
    },
    banner: {
      color: colors.textGray,
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.96px',
      paddingLeft: 41,
    },
    eventOverview: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    eventTitle: {
      color: colors.IRISteal,
      fontSize: 23,
      fontWeight: 500,
      paddingLeft: 41,
    },
    eventDate: {
      color: colors.textGray,
      textTransform: 'uppercase',
      fontSize: 23,
      letterSpacing: '1.32px',
      paddingLeft: 12.5,
      fontWeight: 500,
    },
  })();

export default DashboardEventsEditScreen;
