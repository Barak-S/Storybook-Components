import React, { FC, useState } from 'react';
import { Divider, useTheme, Theme, makeStyles, useMediaQuery } from '@material-ui/core';
import { StyleProps, Styles, colors } from 'styles';
import { ContainedButton } from 'components/Buttons';
import { ProfileAcceptedUser } from './AcceptedUser';
import { ProfilePendingUser, ProfileSelectedUser as SelectedUser } from './PendingUser';
import { ResendOrganizationInvitation, NewOrganizationInvitation } from './Invitations';

type Props = StyleProps;

export const ProfileUserRoles: FC<Props> = ({ style }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [showResendInvitation, setShowResendInvitation] = useState<boolean>(false);
  const [showNewInvitation, setShowNewInvitation] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<SelectedUser>({});

  return (
    <>
      <div className={classes.container} style={style}>
        <div className={classes.headerSection}>
          <div>
            <span className={classes.title}>{'Event Activity'}</span>
            <span className={classes.subtitle}>
              {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
            </span>
          </div>
          <ContainedButton
            style={styles.inviteBtn}
            className={classes.inviteBtn}
            size="medium"
            endIcon="envelope-open-text"
            onClick={() => setShowNewInvitation(true)}
          >
            {'INVITE TEAM MEMBER'}
          </ContainedButton>
        </div>
        <div className={classes.userContainer}>
          <div className={classes.tableContainer}>
            {!isMobile && (
              <div className={classes.tableHeadRow}>
                <div className={classes.userCol}>{'NAME'}</div>
                <div className={classes.userCol}>{'EMAIL'}</div>
                <div className={classes.actionCol}>{'ACCOUNT ROLE'}</div>
              </div>
            )}
            <div className={classes.usersTable}>
              <ProfilePendingUser
                user={{ firstName: 'Barak', lastName: 'Saidoff', email: 'name@domain.com', status: 'Invite Sent' }}
                open={showResendInvitation}
                handleClick={setShowResendInvitation}
                setSelectedUser={setSelectedUser}
              />
              <ProfileAcceptedUser
                user={{ firstName: 'Jarosllav', lastName: 'Khorishchenko', email: 'name@domain.com', role: 'Owner' }}
              />
              <ProfileAcceptedUser
                user={{ firstName: 'Theresa', lastName: 'Saunders', email: 'name@domain.com', role: 'Admin' }}
              />
              <ProfileAcceptedUser user={{ firstName: 'Helen', lastName: 'Slavko', email: 'name@domain.com', role: 'Editor' }} />
              <ProfileAcceptedUser user={{ firstName: 'Joe', lastName: 'Arcuri', email: 'name@domain.com', role: 'Manager' }} />
            </div>
          </div>
        </div>
        {!isMobile && <Divider />}
      </div>
      {showResendInvitation && (
        <ResendOrganizationInvitation user={selectedUser} open={showResendInvitation} handleClick={setShowResendInvitation} />
      )}
      {showNewInvitation && <NewOrganizationInvitation open={showNewInvitation} handleClick={setShowNewInvitation} />}
    </>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      marginBottom: '34px',
      width: '-webkit-fill-available',
    },
    headerSection: {
      marginBottom: 31,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    userContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    tableContainer: {
      paddingBottom: 39,
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        paddingBottom: 0,
      },
    },
    title: {
      letterSpacing: '0px',
      color: colors.marine,
      display: 'block',
      paddingTop: 7,
      paddingBottom: 6,
      fontWeight: 500,
    },
    subtitle: {
      display: 'block',
      letterSpacing: '0px',
      color: colors.brownishGrey,
      maxWidth: 744,
    },
    inviteBtn: {
      [theme.breakpoints.down('sm')]: {
        marginTop: 35,
      },
    },

    usersTable: {
      maxHeight: 410,
      border: `1px solid ${colors.greyish}`,
      overflowY: 'auto',
    },
    tableHeadRow: {
      height: 65,
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: 25,
      paddingRight: 15,
      backgroundColor: colors.paleGrey,
      border: `1px solid ${colors.greyish}`,
      borderBottom: 'none',
      color: colors.coolBlue,
      fontWeight: 500,
      letterSpacing: 2,
    },
    tableRow: {
      height: 90,
      display: 'flex',
      flexDirection: 'row',
      borderBottom: `1px solid ${colors.greyish}`,
      paddingLeft: 25,
      paddingRight: 15,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        height: 150,
        padding: 15,
      },
    },
    userCol: {
      width: '35%',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    actionCol: {
      width: '30%',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  })();

const styles: Styles = {
  input: {
    fontSize: 16,
  },
  inviteBtn: {
    maxWidth: 245,
    width: '100%',
    height: 35,
    letterSpacing: 2.25,
    padding: 0,
  },
};

export type ProfileUserRoles = Props;
export default ProfileUserRoles;
