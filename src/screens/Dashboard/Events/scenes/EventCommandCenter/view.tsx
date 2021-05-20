import { makeStyles, Paper, Theme, useMediaQuery, useTheme, MenuItem } from '@material-ui/core';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import { Title, View } from 'components/Common';
import React, { FC, useState, MouseEvent, useEffect } from 'react';
import { colors, StyleProps } from 'styles';
import { FormToggle } from 'components/Form';
import { Dropdown } from 'components/Navigation';
import { DashboardAppBarBtn } from 'components/Dashboard/AppBar/components/Menu';
import { VerticalSplitter } from 'components/Data';
import EventBadgeStatus from '../../components/EventBadgeStatus';
import EventImageTile from '../../components/EventImageTile';
import EventDataTile from '../../components/EventDataTile';
import EditEventTile from '../../components/EditEventTile';
import EventCountdown from '../../components/EventCountdown';
import backgroundImg from 'components/Layout/BackgroundedContainer/assets/background.png';
import { ContainedButton } from 'components/Buttons';

type Props = StyleProps;

interface BtnData {
  name: DashboardAppBarBtn;
  icon: LineAwesomeIconType;
  label: string;
}

export const DashboardEventCommandCenterView: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [editDash, setEditDash] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | undefined>(undefined);

  const handleProfileClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };

  useEffect(() => {
    isTablet && setEditDash(false);
  }, [isTablet]);

  const buttons: BtnData[] = [
    {
      name: 'events',
      icon: 'copy',
      label: 'Clone',
    },
    {
      name: 'analytics',
      icon: 'archive',
      label: 'Archive',
    },
    {
      name: 'users',
      icon: 'calendar-times',
      label: 'Delete',
    },
  ];

  return (
    <Paper
      className={classes.container}
      style={{
        backgroundImage: editDash ? `url("${backgroundImg}")` : undefined,
        backgroundSize: 'cover',
        minHeight: editDash ? 699 : 508,
        transition: '0.3s ease all',
      }}
    >
      <View row className={classes.eventSummary}>
        <div className={classes.eventHeader}>
          <EventBadgeStatus label="PUBLIC EVENT" />
          <Title type="h5" className={classes.eventDate}>
            {'June 9-12 • 2021'}
          </Title>
        </div>
        <View row style={{ alignItems: 'center', display: isTablet ? 'none' : 'flex' }}>
          <Title type="h6" className={classes.toggleTitle} style={{ color: !editDash ? colors.brownishGrey : colors.warmPurple }}>
            {'EDIT'}
          </Title>
          <FormToggle
            style={{ flexDirection: 'row-reverse', height: 32 }}
            value={editDash}
            onChange={setEditDash}
            toggleClassName={classes.formToggle}
          />
          <VerticalSplitter style={{ height: 32, paddingLeft: 15 }} />
          <Dropdown
            anchor={anchorEl}
            open={!!anchorEl}
            onClose={handleMenuClose}
            onToggle={handleProfileClick}
            classes={{
              menu: classes.dropdown,
              icon: classes.dropdownIcon,
            }}
          >
            {buttons.map(({ name, icon, label }) => {
              return (
                <MenuItem key={name} component="button">
                  {<LineAwesomeIcon type={icon} />}
                  {label}
                </MenuItem>
              );
            })}
          </Dropdown>
        </View>
      </View>
      <Title type="h2" className={classes.eventTitle}>
        {'2021 VR/AR Discovery Conference'}
      </Title>
      <View row style={{ width: '200%' }}>
        <div
          className={classes.eventContainer}
          style={{ transform: editDash ? 'translateX(-100%)' : 'translateX(0%)', transition: '0.3s ease all' }}
        >
          <EventImageTile />
          <div className={classes.eventDataCol}>
            <EventCountdown deadline={new Date(2021, 5, 9)} />
            <EventDataTile eventData="12.3k" title="TOTAL REVENUE" />
          </div>
          <div className={classes.eventDataCol}>
            <EventDataTile eventData="547" title="TOTAL SUBSCRIBED" />
            <EventDataTile subTitle="Will display when event is live." title="EVENT REGISTRATION" />
          </div>
          <div className={classes.eventDataCol}>
            <EventDataTile subTitle="Will display when registration is set up." title="TOTAL SUBSCRIBED" />
            <EventDataTile subTitle="Will display when event is live." title="TOTAL IN-PERSON ATTENDEES" />
          </div>
        </div>
        <div
          className={classes.editEventContainer}
          style={{ transform: !editDash ? 'translateX(100%)' : 'translateX(-100%)', transition: '0.3s ease all' }}
        >
          <div
            style={{ display: !editDash ? 'none' : 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}
          >
            <div className={classes.eventDataRow}>
              <EditEventTile
                title="EVENT PROFILE"
                description="Lorem ipsum dolor sit amet, consectetur adipi scing elitsed. Lorem ipsum dolors consect etur adipiscing elitsed."
                icon="clipboard-list"
                linkTo="Profile"
                style={{ height: 201 }}
              />
              <EditEventTile
                title="EVENT SETTINGS"
                description="Lorem ipsum dolor sit amet, consectetur adipi scing elitsed. Lorem ipsum dolors consect etur adipiscing elitsed."
                icon="cog"
                linkTo="Settings"
                style={{ height: 201 }}
              />
            </div>
            <div className={classes.eventDataRow}>
              <EditEventTile
                title="ATTENDEE REGISTRATION"
                description="This is where your attendees will learn about and register for your event."
                icon="clipboard-list"
                linkTo="Registration"
                style={{ height: 201 }}
                disabled
              />
              <EditEventTile
                title="EVENT TEAM"
                description="Invite the members of your organization who will be responsible for the event"
                icon="users"
                linkTo="Manage Users"
                style={{ height: 201 }}
                disabled
              />
            </div>
            <div className={classes.eventDataRow}>
              <EditEventTile
                title="EVENT SESSION"
                description="Invite the members of your organization who will be responsible for the event"
                icon="calendar-plus"
                linkTo="Sessions"
                style={{ height: 425 }}
                disabled
              />
            </div>
            <div className={classes.eventDataRow}>
              <EditEventTile
                title="EVENT SPONSORS"
                description="Invite the members of your organization who will be responsible for the event"
                icon="thumbs-up"
                linkTo="Sponsors"
                style={{ height: 425 }}
                disabled
              />
            </div>
            <div className={classes.eventDataRow}>
              <EditEventTile
                title="EVENT APPEARANCE"
                description="Brand your selected event theme and add in messaging to your attendees."
                icon="edit"
                style={{ height: 425 }}
                disabled
              />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 15, paddingBottom: 38 }}>
            <ContainedButton style={{ height: 46, width: 88 }} onClick={() => setEditDash(false)}>
              {'DONE'}
            </ContainedButton>
          </div>
        </div>
      </View>
    </Paper>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      marginBottom: 27,
      background: colors.paleGrey,
      paddingTop: 29,
      borderRadius: 8,
      boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
      overflow: 'hidden',
      [theme.breakpoints.down('md')]: {
        marginTop: 22,
        marginLeft: 10.5,
        marginRight: 10.5,
        marginBottom: 32,
        borderRadius: 12,
      },
    },
    eventHeader: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    eventSummary: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 39,
      paddingLeft: 39,
      [theme.breakpoints.down('md')]: {
        paddingLeft: 12,
        paddingRight: 12,
      },
    },
    eventContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingLeft: 39,
      paddingRight: 39,
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 10.5,
        paddingRight: 12,
        paddingBottom: 32,
      },
    },
    editEventContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      paddingLeft: 39,
      paddingRight: 39,
    },
    eventDataCol: {
      height: 299,
      maxWidth: 354,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '100%',
        maxWidth: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    eventDataRow: {
      maxWidth: 354,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    eventDate: {
      letterSpacing: 1.44,
      fontSize: 18,
      color: colors.coolBlue,
      paddingLeft: 14,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        paddingLeft: 0,
        paddingTop: 14,
      },
    },
    eventTitle: {
      color: colors.marineBlue,
      fontSize: 29,
      fontWeight: 500,
      paddingTop: 21,
      paddingBottom: 34,
      paddingLeft: 39,
      [theme.breakpoints.down('sm')]: {
        fontSize: 21,
        paddingTop: 7,
        paddingBottom: 14,
        paddingLeft: 10.5,
        paddingRight: 12,
      },
    },
    dropdown: {
      '& .MuiPaper-rounded': {
        transform: 'translate(8px, 85px)!important',
      },
      '& .MuiList-root': {
        flexDirection: 'column',
        overflow: 'hidden',

        '& .MuiButtonBase-root': {
          display: 'flex',
          width: '100%',
          padding: '8px 16px',
          color: colors.marineBlue,
          fontWeight: 400,
          fontSize: 16,
          '&:hover, &.Mui-selected': {
            fontWeight: 'normal',
            fontSize: 16,
            backgroundColor: colors.white,
            color: colors.coolBlue,
          },
        },
        '& .MuiIcon-root': {
          color: colors.coolBlue,
          marginRight: 10,
        },
      },
    },
    dropdownIcon: {
      fontSize: 24,
      color: colors.marineBlue,
      transform: 'initial',
      marginLeft: 15,
      marginTop: 5,
    },
    toggleTitle: {
      fontSize: 16,
      fontWeight: 400,
    },
    formToggle: {
      transform: 'rotate(180deg)',
      marginLeft: 9,
      '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
        background: colors.warmPurple,
      },
    },
  })();

export type DashboardEventCommandCenterViewProps = Props;
export default DashboardEventCommandCenterView;
