import { Grid, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { EventStatus } from 'core/api';
import React, { FC } from 'react';
import { colors, StyleProps, useScreenSizes } from 'styles';

import EventDate from './components/Date';
import EventHeader from './components/Header';
import EventImage from './components/Image';
import EventMainActions from './components/MainActions';
import EventRegistration from './components/Registration';
import EventTitle from './components/Title';

interface Props extends StyleProps {
  /** Start date of the event */
  date: Date | string | number;
  /** Event title */
  title: string;
  /** Event URL */
  url: string;
  /** Link to the image */
  image: string;
  /** Event status */
  status: EventStatus;
  /** Start of the registration */
  regStartDate?: Date | string | number;
  /** Registration URL */
  regUrl?: string;
  /** Subscribed users count */
  subscrUsersCount?: number;
  /** Active users count */
  activeUsersCount?: number;
  /** "Setup registration" button click action at the "Event registartion" */
  onSetupRegistrationClick?: () => void;
  /** "Continue" button click action at the "Registartion" block */
  onRegContinueClick?: () => void;
  onEditClick?: () => void;
  onInviteTeamMembersClick?: () => void;
  onAddPresenterClick?: () => void;
  onEditSessionsClick?: () => void;
  onCloneClick?: () => void;
  onArchiveClick?: () => void;
  onRemoveClick?: () => void;
  onCopyToClipboardClick?: (url: string) => void;
  /** Click on event url. Should open event at a new tab */
  onUrlClick?: () => void;
}

/**
 * This component for displayin event item at the dashboard
 *
 * - [Descktop](https://zpl.io/VkQ3KJq)
 * - [Tablet](https://zpl.io/VkQx06G)
 * - [Mobile](https://zpl.io/ad6j0NK)
 */
export const DashboardEvent: FC<Props> = ({
  date,
  title,
  url,
  image,
  status,
  regStartDate,
  regUrl,
  subscrUsersCount = 0,
  activeUsersCount = 0,
  onSetupRegistrationClick,
  onRegContinueClick,
  onInviteTeamMembersClick,
  onAddPresenterClick,
  onEditSessionsClick,
  onEditClick,
  onCloneClick,
  onArchiveClick,
  onRemoveClick,
  onCopyToClipboardClick,
  onUrlClick,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { isMobile, isDesktop, isTablet } = useScreenSizes();

  const handleCopyBtnClick = () => {
    if (onCopyToClipboardClick && regUrl) {
      onCopyToClipboardClick(regUrl);
    }
  };

  return (
    <Paper className={classes.container} elevation={3}>
      {(isMobile || isDesktop) && (
        <>
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: 10 }}>
              <EventDate date={date} className={classes.date} />
            </Grid>
          </Grid>
          <Grid container className={classes.row}>
            <Grid item xs={12} md={6} lg={6} className={classes.row}>
              <EventTitle>{title}</EventTitle>
            </Grid>
            <Grid item xs={12} md={6} lg={6} className={classes.eventHeaderWrap}>
              <EventHeader
                url={url}
                onClick={onCopyToClipboardClick}
                onEditClick={onEditClick}
                onCloneClick={onCloneClick}
                onArchiveClick={onArchiveClick}
                onRemoveClick={onRemoveClick}
              />
            </Grid>
          </Grid>
        </>
      )}
      <Grid container spacing={isTablet ? 2 : 3}>
        <Grid className={classes.firstColumn} item xs={12} md={4} lg={4}>
          {isTablet && !isMobile && (
            <Grid>
              <EventDate date={date} className={classes.date} />
              <EventTitle>{title}</EventTitle>
            </Grid>
          )}
          <EventImage source={image} status={status} onEditClick={onEditClick} onUrlClick={onUrlClick} />
        </Grid>
        <Grid item xs={12} md={4} lg={3} className={classes.middleColumn}>
          {isTablet && !isMobile && (
            <EventHeader
              url={url}
              onClick={onCopyToClipboardClick}
              onEditClick={onEditClick}
              onCloneClick={onCloneClick}
              onArchiveClick={onArchiveClick}
              onRemoveClick={onRemoveClick}
              style={{ marginBottom: 15 }}
            />
          )}
          <EventMainActions
            onEditClick={onEditClick}
            onInviteTeamMembersClick={onInviteTeamMembersClick}
            onAddPresenterClick={onAddPresenterClick}
            onEditSessionsClick={onEditSessionsClick}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={5}>
          <EventRegistration
            status={status}
            regStartDate={regStartDate}
            regUrl={regUrl}
            subscrUsersCount={subscrUsersCount}
            activeUsersCount={activeUsersCount}
            onSetupRegistrationClick={onSetupRegistrationClick}
            onRegContinueClick={onRegContinueClick}
            onCopyToClipboardClick={handleCopyBtnClick}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      borderRadius: 12,
      backgroundColor: colors.paleGrey,
      marginBottom: 29,
      padding: 20,
      [theme.breakpoints.up('md')]: {
        padding: '45px 52px 52px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '25px 52px 52px',
      },
    },
    row: {
      display: 'flex',
      width: '100%',
      marginBottom: 25,
      '&:last-child': {
        marginBottom: 0,
      },
    },
    firstColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    middleColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    date: {
      display: 'flex',
      fontSize: 18,
      color: colors.coolBlue,
      fontWeight: 500,
      textTransform: 'uppercase',
      marginBottom: 12,
      [theme.breakpoints.up('lg')]: {
        fontSize: 20,
        marginBottom: 0,
      },
    },
    eventHeaderWrap: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      [theme.breakpoints.up('md')]: {
        fontSize: 20,
        marginBottom: 0,
        justifyContent: 'flex-end',
      },
    },
  })();

export type DashboardEventProps = Props;
export default DashboardEvent;
