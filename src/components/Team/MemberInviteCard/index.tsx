import { Button, Grid, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import React, { FC } from 'react';
import { StyleProps, colors, mx } from 'styles';
import { Text } from 'components/Common';
import { TeamMemberInvite } from 'core/api';

interface Props extends StyleProps {
  data: TeamMemberInvite;
}

export const TeamMemberInviteCard: FC<Props> = ({
  data: { firstName, lastName, email, userGroup, companyType, companyName },
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Paper className={classes.container} elevation={3}>
      <Grid className={classes.topBlock}>
        <Grid>
          <Text className={classes.topText}>
            {firstName} {lastName}
          </Text>
          <Text className={classes.topText}>{companyName}</Text>
          <Text className={classes.topText}>{email}</Text>
        </Grid>
        <Text className={classes.topLabel}>{'Invite Sent'}</Text>
      </Grid>
      <Grid className={classes.middleBlock}>
        {userGroup && (
          <Grid className={classes.middleData}>
            <Text className={classes.middleLabel}>{'User Group:'}</Text>
            <Text className={classes.middleText}>{`“${userGroup}“`}</Text>
          </Grid>
        )}
        {companyType && (
          <Grid className={classes.middleData}>
            <Text className={classes.middleLabel}>{'Company Type:'}</Text>
            <Text className={classes.middleText}>{`“${companyType}“`}</Text>
          </Grid>
        )}
      </Grid>
      <Button className={classes.button}>{'Resend Invite'}</Button>
    </Paper>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      padding: '26px 30px',
      whiteSpace: 'break-spaces',
      wordBreak: 'break-all',
      background: colors.paleGrey,
      fontSize: 14,
      lineHeight: 1.4,
      borderRadius: 10,
      [theme.breakpoints.up(1366)]: {
        maxHeight: 230,
      },
    },
    topBlock: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column-reverse',
      paddingBottom: 13,
      fontWeight: 500,
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    topText: {
      display: 'flex',
      color: colors.marineBlue,
      wordBreak: 'keep-all',
      paddingRight: 15,
    },
    topLabel: {
      textAlign: 'center',
      color: colors.green,
      flexShrink: 0,
      wordBreak: 'keep-all',
      whiteSpace: 'nowrap',
      marginBottom: 10,
      [theme.breakpoints.up('sm')]: {
        textAlign: 'right',
        marginBottom: 0,
      },
    },
    middleBlock: {
      width: '100%',
      padding: '12px 0',
      ...mx.borderTop(1, 'solid', colors.silver),
      ...mx.borderBottom(1, 'solid', colors.silver),
      marginBottom: 10,
    },
    middleData: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    middleLabel: {
      color: colors.darkGreen,
    },
    middleText: {
      color: colors.brownishGrey,
    },
    button: {
      color: colors.coolBlue,
      textDecoration: 'underline',
      textTransform: 'capitalize',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })();

export default TeamMemberInviteCard;
