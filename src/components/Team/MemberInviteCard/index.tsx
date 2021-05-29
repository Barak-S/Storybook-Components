import { Grid, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { TextButton } from 'components/Buttons';
import { Text } from 'components/Common';
import { OrganizationInvite, organizationRoleToName } from 'core/api';
import React, { FC } from 'react';
import { colors, mx, StyleProps } from 'styles';

interface Props extends StyleProps {
  data: OrganizationInvite;
  onResendClick?: () => void;
}

export const TeamMemberInviteCard: FC<Props> = ({ data, onResendClick }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { firstName, lastName, email, role, title } = data;

  return (
    <Paper className={classes.container} elevation={3}>
      <Grid className={classes.topBlock}>
        <Grid>
          <Text className={classes.topText}>
            {firstName} {lastName}
          </Text>
          <Text className={classes.topText}>{email}</Text>
        </Grid>
        <Text className={classes.topLabel}>{'Invite Sent'}</Text>
      </Grid>
      <Grid className={classes.middleBlock}>
        <Grid className={classes.middleData}>
          <Text className={classes.middleLabel}>{'Role:'}</Text>
          <Text className={classes.middleText}>{organizationRoleToName(role)}</Text>
        </Grid>
        {title && (
          <Grid className={classes.middleData}>
            <Text className={classes.middleLabel}>{'Title:'}</Text>
            <Text className={classes.middleText}>{`${title}`}</Text>
          </Grid>
        )}
      </Grid>
      <TextButton size={14} onClick={onResendClick}>
        {'Resend Invite'}
      </TextButton>
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
      color: colors.brownGrey,
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
      fontWeight: 'bold',
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

export type TeamMemberInviteCardProps = Props;
export default TeamMemberInviteCard;
