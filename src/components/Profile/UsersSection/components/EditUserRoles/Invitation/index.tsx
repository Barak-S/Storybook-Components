import { View, Title, Text } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps, colors, Styles } from 'styles';
import { makeStyles, Divider, Dialog, Paper, Theme, useTheme, IconButton } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import { FormSelect, FormTextInput, FormTextArea, FormRow } from 'components/Form';
import { ContainedButton } from 'components/Buttons';

interface Props extends StyleProps {
  user?: UserInvitation;
  open: boolean;
  handleClick?: (value: boolean) => void;
}

interface UserInvitation {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
}

export const OrganizationInvitation: FC<Props> = ({ user, open, handleClick }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClickButton = () => {
    if (open && handleClick) {
      handleClick(false);
    }
  };

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const userRoles = [{ value: 'Owner' }, { value: 'User' }, { value: 'Admin' }, { value: 'Manager' }, { value: 'Editor' }];

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
          {'Team Member Invitation'}
        </Title>
        <span className={classes.secondaryHeader}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'}
        </span>
        <Text className={classes.stepRequired}>{'required*'}</Text>
        <FormRow className={classes.formRow}>
          <FormTextInput label="First Name" value={user?.firstName || ''} className={classes.input} inputStyle={styles.input} />
          <FormTextInput label="Last Name" value={user?.lastName || ''} className={classes.input2} inputStyle={styles.input} />
        </FormRow>
        <FormRow>
          <FormTextInput
            label="Email"
            inputStyle={styles.input}
            style={{ marginBottom: 0 }}
            value={user?.email || ''}
            className={classes.inputFull}
            adornmentType="transparent"
            iconStart={<LineAwesomeIcon type="envelope-open-text" style={{ color: colors.greyish }} />}
          />
        </FormRow>
        <View style={{ marginBottom: 30 }}>
          <FormSelect
            className={classes.formSelect}
            classes={socialSelectClasses}
            fullWidth
            value={user?.role ? userRoles.find(itm => itm.value === user.role) : undefined}
            label="Account Role"
            options={userRoles}
            keyExtractor={itm => itm.value}
            titleExtractor={itm => itm.value}
          />
        </View>
        <View>
          <FormTextArea
            label="Invitation Message"
            value="I’d like to invite you to our organization’s Iris account. Please register or sign in to Iris using the link below and set up your profile. Thank You."
            className={classes.textAreaInput}
          />
        </View>
        <Divider style={{ margin: '25px 0' }} />
        <ContainedButton style={styles.resendBtn} size="large">
          {'RESEND INVITE'}
        </ContainedButton>
      </Paper>
      <IconButton size="small" onClick={handleClickButton} className={classes.removeBtn}>
        <LineAwesomeIcon type="times-circle" />
      </IconButton>
    </Dialog>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    paper: {
      maxWidth: 866,
      maxHeight: 735,
      flexDirection: 'row',
      background: '#082341',
      boxShadow: 'none',
      transform: 'translateX(34px)',
      marginTop: 98,
      [theme.breakpoints.down('sm')]: {
        marginTop: 30,
        flexDirection: 'column-reverse',
        transform: 'translateX(0px)',
      },
    },
    container: {},
    invitationCard: {
      maxWidth: 797,
      maxHeight: 735,
      backgroundColor: colors.white,
      paddingTop: 34,
      paddingLeft: 60,
      paddingRight: 60,
      paddingBottom: 42,
      borderRadius: 30,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 15,
        paddingRight: 15,
        maxHeight: '100%',
      },
    },
    formRow: {
      margin: '16px 0',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    primaryHeader: {
      color: colors.marineBlue,
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 16,
    },
    secondaryHeader: {
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
      overflowY: 'auto',
      overflowX: 'hidden',
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
    removeBtn: {
      marginLeft: 27,
      height: 25,
      width: 25,
      color: colors.white,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 'auto',
      },
    },
  })();

const styles: Styles = {
  input: {
    fontSize: 16,
  },
  resendBtn: {
    width: 187,
    height: 52,
    marginLeft: 'auto',
  },
};

export type OrganizationInvitation = Props;
export default OrganizationInvitation;
