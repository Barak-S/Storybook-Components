import { Grid, Hidden, makeStyles, Theme, useTheme } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { ContainedButton } from 'components/Buttons';
import { Text, Title } from 'components/Common';
import { EventStatus } from 'components/Events/types';
import { FormCopyTextInput } from 'components/Form';
import React, { FC } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';
import { valToDate } from 'utils';

interface Props extends StyleProps {
  status: EventStatus;
  regStartDate?: Date | string | number;
  regUrl?: string;
  subscrUsersCount?: number;
  activeUsersCount?: number;
  onSetupRegistrationClick?: () => void;
  onRegContinueClick?: () => void;
  onCopyToClipboardClick?: (url: string) => void;
}

export const DashboardEventRegistration: FC<Props> = ({
  status,
  regStartDate,
  regUrl = '',
  subscrUsersCount,
  activeUsersCount,
  onSetupRegistrationClick,
  onRegContinueClick,
  onCopyToClipboardClick,
}) => {
  const isWaiting = status === 'waiting';
  const isEventSetup = status === 'event-setup';
  const isActive = status === 'active';

  const getFormatedRegStartDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  const handleSetupRegClick = () => {
    if (onSetupRegistrationClick) {
      onSetupRegistrationClick();
    }
  };

  const handleContinueClick = () => {
    if (onRegContinueClick) {
      onRegContinueClick();
    }
  };

  const handleCopyToClipboardClick = () => {
    if (onCopyToClipboardClick) {
      onCopyToClipboardClick(regUrl);
    }
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid className={classes.container}>
      <Grid className={classes.registrationBlock}>
        <Title type="h5" className={classes.title}>
          {'event registration'}
        </Title>
        {!isWaiting ? (
          <>
            <Grid container style={{ marginBottom: 13 }}>
              <Grid item xs={12}>
                <Skeleton className={classes.skeleton} />
                <Skeleton className={classes.skeleton} />
                <Skeleton className={classes.skeleton} />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ flexWrap: 'nowrap' }}>
              <Hidden mdDown>
                <Grid item className={classes.bottomSkeleton}>
                  <Skeleton className={classes.skeleton} />
                  <Skeleton className={classes.skeleton} />
                </Grid>
              </Hidden>
              <Grid item className={classes.setupBtnHolder}>
                <ContainedButton
                  theme="small"
                  endIcon="chevron-circle-right"
                  className={classes.setupButton}
                  onClick={handleSetupRegClick}
                >
                  {'setup registration'}
                </ContainedButton>
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid container className={classes.regContinue}>
            <FormCopyTextInput className={classes.input} url={regUrl} onCopyClick={handleCopyToClipboardClick} />
            <ContainedButton
              theme="small"
              endIcon="chevron-circle-right"
              className={classes.continueButton}
              onClick={handleContinueClick}
            >
              {'create email invite'}
            </ContainedButton>
          </Grid>
        )}
      </Grid>
      {!isEventSetup && (
        <Grid container className={classes.userBlocksWrap}>
          <Grid item xs={12} xl={6} className={classes.userGrid}>
            <Grid className={classes.userBlock}>
              <Title type="h5" className={classes.title}>
                {'total subscribed'}
              </Title>
              <Text className={classes.text}>
                {isActive ? (
                  <span style={ms(styles.boldText, styles.counter)}>{subscrUsersCount}</span>
                ) : !isWaiting && regStartDate ? (
                  <>
                    {'Registration is set to begin on '}
                    <span style={styles.boldText}>{getFormatedRegStartDate(valToDate(regStartDate))}</span>
                  </>
                ) : (
                  'Registration not currently open'
                )}
              </Text>
            </Grid>
          </Grid>
          <Grid item xs={12} xl={6} className={classes.userGrid}>
            <Grid className={classes.userBlock}>
              <Title type="h5" className={classes.title}>
                {'total active users'}
              </Title>
              <Text className={classes.text}>
                {isActive ? (
                  <span style={ms(styles.boldText, styles.counter)}>{activeUsersCount}</span>
                ) : (
                  'Will display when event is live.'
                )}
              </Text>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

const styles: Styles = {
  boldText: {
    color: colors.marineBlue,
    fontWeight: 500,
  },
  counter: {
    fontSize: 26,
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    registrationBlock: {
      background: colors.white,
      padding: 15,
      borderRadius: 12,
      marginBottom: 23,
      '&:last-child': {
        marginBottom: 0,
      },
      [theme.breakpoints.up('lg')]: {
        padding: '18px 20px',
      },
    },
    title: {
      fontSize: 16,
      textTransform: 'uppercase',
      fontWeight: 500,
      color: colors.marineBlue,
      marginBottom: 10,
      letterSpacing: 1.28,
      [theme.breakpoints.up('lg')]: {
        marginBottom: 13,
      },
    },
    setupButton: {
      background: colors.rustyRed,
    },
    skeleton: {
      height: 12,
      borderRadius: 5,
      marginBottom: 13,
      '&:last-child': {
        marginBottom: 0,
      },
    },
    userBlocksWrap: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    userGrid: {
      marginBottom: 15,
      '&:last-child': {
        marginBottom: 0,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '48%',
        marginBottom: 0,
      },
    },
    userBlock: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      minHeight: 65,
      background: colors.white,
      padding: '11px 20px',
      borderRadius: 12,
      [theme.breakpoints.up('lg')]: {
        height: 97,
      },
      [theme.breakpoints.up('xl')]: {
        padding: '25px 10px',
      },
      '& h5': {
        [theme.breakpoints.down('lg')]: {
          marginBottom: 4,
        },
      },
    },
    text: {
      fontSize: 14,
      color: colors.black,
      fontStyle: 'italic',
      opacity: 0.81,
      textTransform: 'none',
      textAlign: 'center',
    },
    regContinue: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 13,
    },
    input: {
      marginBottom: 18,
    },
    bottomSkeleton: {
      width: '100%',
    },
    setupBtnHolder: {
      width: '100%',
      flexShrink: 0,
      [theme.breakpoints.up('md')]: {
        maxWidth: '100%',
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 254,
      },
    },
    continueButton: {
      '&.MuiButton-contained': {
        background: colors.marineBlue,
        width: 'auto',
        '& .MuiButton-label': {
          paddingRight: 25,
          paddingLeft: 10,
        },
      },
    },
  })();

export default DashboardEventRegistration;
