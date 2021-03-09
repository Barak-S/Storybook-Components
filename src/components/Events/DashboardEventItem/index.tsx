import { Grid, makeStyles, Paper, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import { EventStatus } from 'components/Events/types';
import React, { FC } from 'react';
import { colors, StyleProps } from 'styles';

import ItemDate from './components/Date';
import ItemImage from './components/Image';
import ItemMainActions from './components/MainActions';
import ItemRegistration from './components/Registration';
import ItemTitle from './components/Title';
import ItemUrl from './components/Url';

interface Props extends StyleProps {
  date: Date;
  title: string;
  url: string;
  image: string;
  status: EventStatus;
  regStartDate?: Date;
  regUrl?: string;
  subscrUsersCount?: number;
  activeUsersCount?: number;
  onSetupRegistrationClick?: () => void;
  onRegContinueClick?: () => void;
  onEditClick?: () => void;
  onInviteTeamMembersClick?: () => void;
  onAddPresenterClick?: () => void;
  onEditSessionsClick?: () => void;
  onCloneClick?: () => void;
  onArchiveClick?: () => void;
  onRemoveClick?: () => void;
  onCopyToClipboardClick?: (url: string) => void;
}

export const DashboardEventItem: FC<Props> = ({
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
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const {
    breakpoints: { up, down },
  } = theme;

  const isTablet = useMediaQuery(down('md'));
  const isMobile = useMediaQuery(down('sm'));
  const isDesktop = useMediaQuery(up('lg'));

  const handleImageOnCopyClick = () => {
    if (onCopyToClipboardClick) {
      onCopyToClipboardClick(url);
    }
  };

  return (
    <Paper className={classes.container} elevation={3}>
      {(isMobile || isDesktop) && (
        <>
          <Grid container>
            <Grid item xs={12} style={{ marginBottom: 10 }}>
              <ItemDate date={date} className={classes.date} />
            </Grid>
          </Grid>
          <Grid container className={classes.row} spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <ItemTitle>{title}</ItemTitle>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <ItemUrl
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
      <Grid container spacing={3}>
        <Grid className={classes.firstColumn} item xs={12} md={4} lg={4}>
          {isTablet && !isMobile && (
            <Grid>
              <ItemDate date={date} className={classes.date} />
              <ItemTitle>{title}</ItemTitle>
            </Grid>
          )}
          <ItemImage source={image} status={status} onEditClick={onEditClick} onCopyClick={handleImageOnCopyClick} />
        </Grid>
        <Grid item xs={12} md={4} lg={3} className={classes.middleColumn}>
          {isTablet && !isMobile && (
            <ItemUrl
              url={url}
              onClick={onCopyToClipboardClick}
              onEditClick={onEditClick}
              onCloneClick={onCloneClick}
              onArchiveClick={onArchiveClick}
              onRemoveClick={onRemoveClick}
            />
          )}
          <ItemMainActions
            onEditClick={onEditClick}
            onInviteTeamMembersClick={onInviteTeamMembersClick}
            onAddPresenterClick={onAddPresenterClick}
            onEditSessionsClick={onEditSessionsClick}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={5}>
          <ItemRegistration
            status={status}
            regStartDate={regStartDate}
            regUrl={regUrl}
            subscrUsersCount={subscrUsersCount}
            activeUsersCount={activeUsersCount}
            onSetupRegistrationClick={onSetupRegistrationClick}
            onRegContinueClick={onRegContinueClick}
            onCopyToClipboardClick={onCopyToClipboardClick}
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
  })();

export type DashboardEventItemProps = Props;
export default DashboardEventItem;
