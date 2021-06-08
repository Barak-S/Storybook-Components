import { Grid, Paper } from '@material-ui/core';
import { TextButton } from 'components/Buttons';
import { Text } from 'components/Common';
import { OrganizationInvite, organizationRoleToName } from 'core/api/types';
import React, { FC } from 'react';
import { colors, ms, mx, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  data: OrganizationInvite;
  onResendClick?: (item: OrganizationInvite) => void;
}

export const TeamMemberInviteCard: FC<Props> = ({ style, data, onResendClick }) => {
  const { firstName, lastName, email, role, title } = data;
  return (
    <Paper style={ms(styles.container, style)} elevation={3}>
      <Grid container direction="column">
        <Grid item container direction="row" spacing={2} justify="space-between">
          <Grid item>
            <Text style={styles.nameLabel} block>
              {firstName} {lastName}
            </Text>
            <Text style={styles.nameLabel} block>
              {email}
            </Text>
          </Grid>
          <Grid item>
            <Text style={styles.statusLabel}>{'Invite Sent'}</Text>
          </Grid>
        </Grid>
        <Grid style={styles.fieldsBlock} item container direction="column">
          <Grid item container justify="space-between" direction="row">
            <Grid style={styles.fieldLabel} item>
              {'Role:'}
            </Grid>
            <Grid style={styles.fieldVal} item>{`"${organizationRoleToName(role)}"`}</Grid>
          </Grid>
          {!!title && (
            <Grid item container justify="space-between" direction="row">
              <Grid style={styles.fieldLabel} item>
                {'Title:'}
              </Grid>
              <Grid style={styles.fieldVal} item>{`"${title}"`}</Grid>
            </Grid>
          )}
        </Grid>
        <Grid style={styles.footerBlock} item container direction="row" justify="center">
          <TextButton style={styles.btn} size={14} onClick={() => onResendClick && onResendClick(data)}>
            {'Resend Invite'}
          </TextButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

const styles: Styles = {
  container: {
    width: '100%',
    padding: '26px 30px',
    fontSize: 14,
    lineHeight: 1.4,
    borderRadius: 10,
    backgroundColor: colors.paleGrey,
  },
  nameLabel: {
    fontSize: '14px',
    color: colors.marine,
    fontWeight: 500,
    maxWidth: 150,
    ...mx.threeDots,
  },
  statusLabel: {
    fontSize: '14px',
    color: colors.green,
    fontWeight: 500,
    textAlign: 'right',
  },
  fieldsBlock: {
    ...mx.borderTop(1, 'solid', colors.silver),
    ...mx.borderBottom(1, 'solid', colors.silver),
    marginTop: 13,
    paddingTop: 12,
    paddingBottom: 12,
  },
  fieldLabel: {
    fontSize: '14px',
    color: colors.darkGreen,
  },
  fieldVal: {
    fontSize: '14px',
    color: colors.darkGreen,
  },
  footerBlock: {
    paddingTop: 19,
  },
  btn: {
    textDecoration: 'underline',
  },
};

export type TeamMemberInviteCardProps = Props;
export default TeamMemberInviteCard;
