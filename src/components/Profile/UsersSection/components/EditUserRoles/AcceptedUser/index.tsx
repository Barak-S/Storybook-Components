import React, { FC, useState } from 'react';
import { useTheme, Theme, makeStyles } from '@material-ui/core';
import { StyleProps, colors } from 'styles';
import { FormSelect } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';
import RemoveUser from '../RemoveUser';

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

  const [remove, setRemove] = useState(false);

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const userRoles = [{ value: 'Owner' }, { value: 'User' }, { value: 'Admin' }, { value: 'Manager' }, { value: 'Editor' }];

  return (
    <>
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
            <LineAwesomeIcon
              handleClick={() => setRemove(true)}
              type="user-times"
              className={classes.removeIcon}
              color={colors.windowsBlue}
              size={32}
            />
          </div>
        </div>
      </div>
      {remove && <RemoveUser open={remove} handleClick={setRemove} />}
    </>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    tableRow: {
      height: 90,
      poosition: 'relative',
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
      maxWidth: 350,
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 12,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
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
      position: 'relative',
      width: '30%',
      display: 'flex',
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
        color: colors.blackTwo,
        background: colors.veryLightPinkThree,
        border: `1px solid ${colors.greyish}`,
        borderLeft: 'none',
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
    removeIcon: {
      cursor: 'pointer',
      marginTop: 8,
      marginRight: 14,
      marginLeft: 14,
      [theme.breakpoints.down('md')]: {
        marginRight: 0,
        marginLeft: 8,
      },
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        right: '7px',
        top: '-66px',
      },
    },
  })();

export type ProfileAcceptedUser = Props;
export default ProfileAcceptedUser;
