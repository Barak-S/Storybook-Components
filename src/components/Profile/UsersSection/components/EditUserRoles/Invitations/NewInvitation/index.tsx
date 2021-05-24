import { View, Title, Text } from 'components/Common';
import React, { FC, useState, ChangeEvent } from 'react';
import { StyleProps, colors, Styles } from 'styles';
import { makeStyles, Divider, Dialog, Paper, Theme, useTheme, useMediaQuery } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import { FormSelect, FormTextInput, FormTextArea, FormRow } from 'components/Form';
import { ContainedButton, RoundedIconButton } from 'components/Buttons';
import { isDictEmpty, validators } from 'utils';

interface Props extends StyleProps {
  open: boolean;
  handleClick?: (value: boolean) => void;
}

interface FormData {
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  message?: string;
}

interface UserRole {
  value: string;
}

type FormErrs = Partial<Record<keyof FormData, string>> & { form?: string };

export const NewOrganizationInvitation: FC<Props> = ({ open, handleClick }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickButton = () => {
    if (open && handleClick) {
      handleClick(false);
    }
  };

  const [data, setData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    role: '',
    message: `I’d like to invite you to our organization’s Iris account. Please register or sign in to Iris using the link below and set up your profile. ${'\n'}${'\n'}Thank You.`,
  });
  const [errs, setErrs] = useState<FormErrs | undefined>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [processing, setProcessing] = useState<boolean>(false);

  const handleTextFieldChanged = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErrs(undefined);
    setDisabled(false);
    setData({ ...data, [key]: event.currentTarget.value });
  };

  const handleUserRoleChange = (key: keyof FormData) => (val: UserRole) => {
    setErrs(undefined);
    setDisabled(false);
    setData({ ...data, [key]: val.value });
  };

  const getFormErrs = (data: FormData): FormErrs | undefined => {
    const errs: FormErrs = {
      email: validators.getEmailErr(data.email, { required: true, requiredMsg: 'An Email is required' }),
      firstName: validators.getNameErr(data.firstName, { required: true, requiredMsg: 'A first name is required' }),
      lastName: validators.getNameErr(data.lastName, { required: true, requiredMsg: 'A last name is required' }),
      message: validators.getTextAreaErr(data.message, { required: true, requiredMsg: 'A message is required' }),
      role: !data.role || data.role === '' ? 'Please select a user role' : undefined,
    };
    return !isDictEmpty(errs) ? errs : undefined;
  };

  const submit = () => {
    const curErrs = getFormErrs(data);
    if (curErrs) {
      setErrs(curErrs);
      setProcessing(false);
      setDisabled(true);
    } else {
      setProcessing(true);
    }
  };

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const invitedMembers = [{ name: 'Barak Saidoff', email: 'name@domain.com', status: 'Invite Sent', role: 'Admin' }];
  const userRoles: UserRole[] = [
    { value: 'Owner' },
    { value: 'User' },
    { value: 'Admin' },
    { value: 'Manager' },
    { value: 'Editor' },
  ];

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
          {'Invite team members'}
        </Title>
        <div className={classes.description}>
          <span className={classes.secondaryHeader}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
            }
          </span>
          <Text className={classes.stepRequired}>{'Required*'}</Text>
        </div>
        <div className={classes.main}>
          <div className={classes.inviteSection}>
            <div className={classes.formSection}>
              <FormRow className={classes.formRow}>
                <FormTextInput
                  label="First Name"
                  required
                  value={data.firstName || ''}
                  error={!!errs?.firstName}
                  helperText={errs?.firstName}
                  className={classes.input}
                  inputStyle={styles.input}
                  onChange={handleTextFieldChanged('firstName')}
                />
                <FormTextInput
                  label="Last Name"
                  required
                  value={data.lastName || ''}
                  error={!!errs?.lastName}
                  helperText={errs?.lastName}
                  className={classes.input2}
                  inputStyle={styles.input}
                  onChange={handleTextFieldChanged('lastName')}
                />
              </FormRow>
              <View style={{ marginBottom: 30 }}>
                <FormTextInput
                  label="Email"
                  required
                  inputStyle={styles.input}
                  style={{ marginBottom: 0 }}
                  value={data.email || ''}
                  error={!!errs?.email}
                  helperText={errs?.email}
                  className={classes.inputFull}
                  adornmentType="transparent"
                  iconStart={
                    <LineAwesomeIcon type="envelope-open-text" style={{ color: errs?.email ? colors.error : colors.greyish }} />
                  }
                  onChange={handleTextFieldChanged('email')}
                />
              </View>
              <View style={{ marginBottom: 39 }}>
                <FormSelect
                  required
                  className={classes.formSelect}
                  classes={socialSelectClasses}
                  fullWidth
                  error={!!errs?.role}
                  helperText={errs?.role}
                  label="Account Role"
                  options={userRoles}
                  keyExtractor={itm => itm.value}
                  titleExtractor={itm => itm.value}
                  value={data.role ? userRoles.find(itm => itm.value === data.role) : undefined}
                  onChange={handleUserRoleChange('role')}
                />
              </View>
              <View style={{ marginBottom: 25 }}>
                <FormTextArea
                  resize
                  label="Invitation Message"
                  value={data.message || ''}
                  error={!!errs?.message}
                  helperText={errs?.message}
                  className={classes.textAreaInput}
                  onChange={handleTextFieldChanged('message')}
                />
              </View>
            </div>
            {!isMobile && (
              <div className={classes.invitedStatus}>
                {invitedMembers.map(user => {
                  return (
                    <div key={user.name} className={classes.inviteCard}>
                      <div>
                        <View row style={{ justifyContent: 'space-between' }}>
                          <span style={styles.userDetials}>{user.name}</span>{' '}
                          <span style={styles.inviteStatus}>{user.status}</span>
                        </View>
                        <View>
                          <span style={styles.userEmail}>{user.email}</span>
                        </View>
                      </div>
                      <View
                        row
                        style={{
                          justifyContent: 'space-between',
                          borderTop: `1px solid ${colors.greyish}`,
                          borderBottom: `1px solid ${colors.greyish}`,
                          height: 30,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <span>{'Account Role'}</span> <span>{user.role}</span>
                      </View>
                      <View style={{ textAlign: 'center' }}>
                        <span style={{ color: colors.coolBlue, textDecoration: 'underline', cursor: 'pointer' }}>
                          {'Resend Invite'}
                        </span>
                      </View>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className={classes.modalEnd}>
            {isMobile ? (
              <div style={{ width: '100%', marginTop: 46 }}>
                <span style={{ display: 'block', color: colors.marineBlue, fontWeight: 500, marginBottom: 18, fontSize: 18 }}>
                  {'Sent Invites'}
                </span>
                <Divider style={{ width: '100%', marginBottom: '25px' }} />
                <div className={classes.invitedStatus}>
                  {invitedMembers.map(user => {
                    return (
                      <div key={user.name} className={classes.inviteCard}>
                        <div>
                          <View row style={{ justifyContent: 'space-between' }}>
                            <span style={styles.userDetials}>{user.name}</span>{' '}
                            <span style={styles.inviteStatus}>{user.status}</span>
                          </View>
                          <View>
                            <span style={styles.userEmail}>{user.email}</span>
                          </View>
                        </div>
                        <View
                          row
                          style={{
                            justifyContent: 'space-between',
                            borderTop: `1px solid ${colors.greyish}`,
                            borderBottom: `1px solid ${colors.greyish}`,
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <span>{'Account Role'}</span> <span>{user.role}</span>
                        </View>
                        <View style={{ textAlign: 'center' }}>
                          <span style={{ color: colors.coolBlue, textDecoration: 'underline', cursor: 'pointer' }}>
                            {'Resend Invite'}
                          </span>
                        </View>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Divider style={{ width: '100%', marginBottom: '25px' }} />
            )}
            <div className={classes.endSection}>
              <span style={{ color: colors.coolBlue, textDecoration: 'underline', cursor: 'pointer' }}>
                {'Invite and Add Another Team Member'}
              </span>
              <ContainedButton
                style={styles.sendBtn}
                className={classes.sendBtn}
                size="large"
                onClick={submit}
                disabled={disabled}
                processing={processing}
              >
                {'SEND INVITE'}
              </ContainedButton>
            </div>
          </div>
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
      maxWidth: 1182,
      width: '100%',
      margin: 0,
      flexDirection: 'row',
      background: '#082341',
      boxShadow: 'none',
      transform: 'translateX(34px)',
      [theme.breakpoints.down('md')]: {
        minHeight: '100vh',
        transform: 'translateX(0px)',
      },
    },
    container: {
      minHeight: '100%',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
    },
    inviteSection: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    formSection: {
      width: 575,
      minHeight: 396,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    invitationCard: {
      maxWidth: 1121,
      height: '100%',
      width: '100%',
      backgroundColor: colors.white,
      paddingTop: 42,
      paddingLeft: 60,
      paddingRight: 87,
      paddingBottom: 42,
      borderRadius: 30,
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
        marginTop: 61,
        marginBottom: 42,
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: 15,
        marginRight: 15,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
      },
    },
    invitedStatus: {
      marginLeft: 12,
      maxHeight: 373,
      width: 338,
      overflowY: 'auto',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
      },
    },
    formRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
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
      lineHeight: 1.35,
    },
    input: {
      maxWidth: 275,
      marginBottom: 'auto',
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
        marginRight: 10,
      },
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
      },
    },
    input2: {
      maxWidth: 275,
      marginBottom: 'auto',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: 30,
      },
    },
    inputFull: {
      maxWidth: 675,
      marginBottom: 'auto',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    textAreaInput: {
      marginBottom: 'auto',
      maxWidth: 575,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    description: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
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
    closeBtn: {
      marginLeft: 27,
      [theme.breakpoints.down('md')]: {
        marginLeft: 'auto',
        marginBottom: 12,
        position: 'absolute',
        right: 0,
        top: 15,
      },
      [theme.breakpoints.down('sm')]: {
        right: 15,
      },
    },
    inviteCard: {
      borderRadius: 20,
      backgroundColor: colors.paleGrey,
      height: 177,
      width: '100%',
      padding: 26,
      marginBottom: 18,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    userEmail: {
      display: 'block',
    },
    modalEnd: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
        justifyContent: 'center',
      },
    },
    endSection: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        marginTop: 12,
      },
    },
    sendBtn: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: 30,
        marginTop: 18,
      },
    },
  })();

const styles: Styles = {
  input: {
    fontSize: 16,
  },
  sendBtn: {
    width: 187,
    height: 52,
    letterSpacing: 2.25,
    padding: 0,
  },
  userDetials: {
    color: colors.marineBlue,
    fontWeight: 400,
    fontSize: 15,
  },
  userEmail: {
    color: colors.marineBlue,
    fontWeight: 400,
    fontSize: 15,
    paddingTop: 4,
    paddingBottom: 11,
  },
  inviteStatus: {
    color: colors.green,
    fontWeight: 400,
    fontSize: 14,
  },
  closeBtn: {
    color: colors.white,
    backgroundColor: '#082341',
    height: 32,
    width: 32,
    border: `1.5px solid ${colors.white}`,
  },
};

export type NewOrganizationInvitation = Props;
export default NewOrganizationInvitation;
