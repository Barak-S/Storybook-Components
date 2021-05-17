import { Title } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps, colors, Styles } from 'styles';
import { makeStyles, Dialog, Paper, Theme, useTheme } from '@material-ui/core';
import { ContainedButton, RoundedIconButton } from 'components/Buttons';

interface Props extends StyleProps {
  user?: User;
  open: boolean;
  handleClick?: (value: boolean) => void;
}

interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
}

export const RemoveUser: FC<Props> = ({ user, open, handleClick }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClickButton = () => {
    if (open && handleClick) {
      handleClick(false);
    }
  };

  return (
    <Dialog
      className={classes.container}
      onClose={handleClickButton}
      open={open}
      classes={{ paper: classes.paper }}
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}
    >
      <Paper className={classes.invitationCard}>
        <Title type="h3" className={classes.primaryHeader}>
          {'Confirm Action'}
        </Title>
        <div className={classes.description}>
          <span className={classes.secondaryHeader}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
            }
          </span>
        </div>
        <div className={classes.actionContainer}>
          <ContainedButton style={styles.confirmAction} className={classes.confirmAction} size="large" color="red">
            {'REMOVE USER'}
          </ContainedButton>
          <span style={{ color: colors.coolBlue, textDecoration: 'underline', cursor: 'pointer' }} onClick={handleClickButton}>
            {'Cancel'}
          </span>
        </div>
      </Paper>
      <RoundedIconButton
        icon="times"
        onClick={handleClickButton}
        size={20}
        className={classes.closeBtn}
        style={styles.closeBtn}
      />
    </Dialog>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    paper: {
      maxWidth: 641,
      maxHeight: 735,
      flexDirection: 'row',
      background: '#082341',
      boxShadow: 'none',
      transform: 'translateX(34px)',
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
        flexDirection: 'column-reverse',
        transform: 'translateX(0px)',
      },
    },
    container: {
      height: '100vh',
    },
    invitationCard: {
      maxWidth: 581,
      maxHeight: 308,
      backgroundColor: colors.white,
      paddingTop: 48,
      paddingLeft: 42.5,
      paddingRight: 51.5,
      paddingBottom: 35,
      borderRadius: 30,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 15,
        paddingRight: 15,
        maxHeight: '100%',
        borderRadius: 20,
      },
    },
    formRow: {
      margin: '16px 0',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    primaryHeader: {
      color: colors.rustyRed,
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 14,
    },
    secondaryHeader: {
      lineHeight: 1.35,
      fontSize: 16,
      maxWidth: 427,
      width: '100%',
    },
    input: {
      maxWidth: 320,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    input2: {
      maxWidth: 320,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: 30,
      },
    },
    inputFull: {
      maxWidth: 675,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    textAreaInput: {
      maxWidth: 675,
      height: 175,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    stepRequired: {
      display: 'block',
      color: colors.rustyRed,
      fontSize: 12,
      textTransform: 'capitalize',
      marginBottom: 25,
      paddingTop: 6,
    },

    formSelect: {
      maxWidth: 259,
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
    backDrop: {
      background: '#082341',
    },
    confirmAction: {
      height: 25,
      width: 25,
      color: colors.white,
      marginTop: 30,
      marginBottom: 25,
    },
    closeBtn: {
      marginLeft: 27,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 'auto',
        marginBottom: 12,
      },
    },
    description: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    actionContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })();

const styles: Styles = {
  input: {
    fontSize: 16,
  },
  removeBtn: {
    width: 187,
    height: 52,
    letterSpacing: 2.25,
    padding: 0,
  },
  confirmAction: {
    width: 187,
    height: 52,
    letterSpacing: 2.25,
    padding: 0,
  },
  closeBtn: {
    color: colors.white,
    backgroundColor: '#082341',
    height: 32,
    width: 32,
    border: `1.5px solid ${colors.white}`,
  },
};

export type RemoveUser = Props;
export default RemoveUser;
