import React, { FC } from 'react';
import { useTheme, Theme, makeStyles } from '@material-ui/core';
import { StyleProps, colors } from 'styles';

interface Props extends StyleProps {
  user: SelectedUser;
  open?: boolean;
  handleClick?: (value: boolean) => void;
  setSelectedUser: (value: SelectedUser) => void;
}

interface SelectedUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  status?: string;
}

export const ProfilePendingUser: FC<Props> = ({ user, open, handleClick, setSelectedUser }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClickButton = (user: SelectedUser) => (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!open && handleClick) {
      handleClick(true);
      setSelectedUser(user);
    }
  };

  return (
    <div className={classes.tableRow}>
      <div className={classes.userCol}>
        <span className={classes.userName}>{`${user.firstName} ${user.lastName}`} </span>
      </div>
      <div className={classes.userCol}>
        <span className={classes.userEmail}>{user.email}</span>
      </div>
      <div className={classes.actionCol} style={{ height: '100%' }}>
        <div className={classes.actionContainer}>
          <span className={classes.inviteStatus}>{user.status}</span>
          <span className={classes.emailAction} onClick={handleClickButton(user)}>
            {user.status === 'Invite Sent' && 'Resend Invite'}
          </span>
        </div>
      </div>
    </div>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
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
    actionContainer: {
      width: 266,
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        alignItems: 'center',
      },
    },
    userCol: {
      width: '35%',
      fontSize: 19,
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
    userName: {
      display: 'block',
      [theme.breakpoints.down('md')]: {
        paddingTop: 4,
        paddingBottom: 6,
      },
    },
    userEmail: {
      display: 'block',
    },
    inviteStatus: {
      color: colors.green,
      fontWeight: 400,
      fontSize: 15,
    },
    emailAction: {
      color: colors.coolBlue,
      cursor: 'pointer',
      textDecoration: 'underline',
      [theme.breakpoints.down('sm')]: {
        paddingRight: 6,
        fontSize: 14,
      },
    },
  })();

export type ProfilePendingUser = Props;
export type ProfileSelectedUser = SelectedUser;
export default ProfilePendingUser;
