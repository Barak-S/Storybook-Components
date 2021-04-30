import React, { FC } from 'react';
import { useTheme, Theme, makeStyles } from '@material-ui/core';
import { StyleProps, colors } from 'styles';
import { FormSelect } from 'components/Form';

type Props = StyleProps;

interface User {
  user?: User;
}

interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
}

export const ProfileAcceptedUser: FC<User> = ({ user }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const userRoles = [{ value: 'Owner' }, { value: 'User' }, { value: 'Admin' }, { value: 'Manager' }, { value: 'Editor' }];

  return (
    <div className={classes.tableRow}>
      <div className={classes.userCol}>{`${user?.firstName} ${user?.lastName}`}</div>
      <div className={classes.userCol}>{user?.email}</div>
      <div className={classes.actionCol} style={{ alignItems: 'flex-end', height: '100%' }}>
        <div className={classes.actionContainer}>
          <FormSelect
            className={classes.formSelect}
            classes={socialSelectClasses}
            fullWidth
            value={user?.role ? userRoles.find(itm => itm.value === user.role) : undefined}
            label="Role"
            options={userRoles}
            keyExtractor={itm => itm.value}
            titleExtractor={itm => itm.value}
          />
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
      marginBottom: 12,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 0,
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
    formSelect: {
      maxWidth: 266,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    selectAdornment: {
      '&.MuiButtonBase-root': {
        color: colors.brownishGrey,
        background: colors.veryLightPinkThree,
      },
    },
    selectRoot: {
      fontSize: 16,
      textTransform: 'capitalize',
    },
    userName: {
      display: 'block',
      [theme.breakpoints.down('md')]: {
        paddingTop: 4,
        paddingBottom: 6,
      },
    },
  })();

export type ProfileAcceptedUser = Props;
export default ProfileAcceptedUser;
