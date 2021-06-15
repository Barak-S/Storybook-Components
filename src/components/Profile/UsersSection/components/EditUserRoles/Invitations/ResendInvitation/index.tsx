import { View, Title, Text } from 'components/Common';
import React, { FC, useState, ChangeEvent } from 'react';
import { StyleProps, colors, Styles } from 'styles';
import { makeStyles, Divider, Dialog, Paper, Theme, useTheme } from '@material-ui/core';
import { LineAwesomeIcon } from 'components/Icons';
import { FormSelect, FormTextInput, FormTextArea, FormRow } from 'components/Form';
import { ContainedButton, RoundedIconButton } from 'components/Buttons';
import { isDictEmpty, validators } from 'utils';

interface Props extends StyleProps {
  user?: FormData;
  open: boolean;
  handleClick?: (value: boolean) => void;
}

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  message?: string;
}

interface UserRole {
  value: string;
}

type FormErrs = Partial<Record<keyof FormData, string>> & { form?: string };

export const ResendOrganizationInvitation: FC<Props> = ({ user, open, handleClick }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClickButton = () => {
    if (open && handleClick) {
      handleClick(false);
    }
  };

  const [errs, setErrs] = useState<FormErrs | undefined>();
  const [processing, setProcessing] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [data, setData] = useState<FormData>({
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    role: user?.role || '',
    message: `I’d like to invite you to our organization’s Iris account. Please register or sign in to Iris using the link below and set up your profile. ${'\n'}${'\n'}Thank You.`,
  });

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
          {'Team Member Invitation'}
        </Title>
        <div className={classes.description}>
          <span className={classes.secondaryHeader}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
            }
          </span>
          <Text className={classes.stepRequired}>{'Required*'}</Text>
        </div>
        <FormRow className={classes.formRow}>
          <FormTextInput
            required
            label="First Name"
            value={data.firstName || ''}
            error={!!errs?.firstName}
            helperText={errs?.firstName}
            className={classes.input}
            inputStyle={styles.input}
            onChange={handleTextFieldChanged('firstName')}
          />
          <FormTextInput
            label="Last Name"
            value={data.lastName || ''}
            error={!!errs?.lastName}
            helperText={errs?.lastName}
            className={classes.input2}
            inputStyle={styles.input}
            onChange={handleTextFieldChanged('lastName')}
          />
        </FormRow>
        <FormRow>
          <FormTextInput
            label="Email"
            inputStyle={styles.input}
            style={{ marginBottom: 0 }}
            value={data.email || ''}
            error={!!errs?.email}
            helperText={errs?.email}
            className={classes.inputFull}
            adornmentType="transparent"
            iconStart={<LineAwesomeIcon type="envelope-open-text" style={{ color: colors.greyish }} />}
            onChange={handleTextFieldChanged('email')}
          />
        </FormRow>
        <View style={{ marginBottom: 30 }}>
          <FormSelect
            className={classes.formSelect}
            classes={socialSelectClasses}
            fullWidth
            value={data.role ? userRoles.find(itm => itm.value === data.role) : undefined}
            error={!!errs?.role}
            helperText={errs?.role}
            label="Account Role"
            options={userRoles}
            keyExtractor={itm => itm.value}
            titleExtractor={itm => itm.value}
            onChange={handleUserRoleChange('role')}
          />
        </View>
        <View>
          <FormTextArea
            resize
            label="Invitation Message"
            value={data.message || ''}
            error={!!errs?.message}
            helperText={errs?.message}
            className={classes.textAreaInput}
            onChange={handleTextFieldChanged('message')}
            style={{ minHeight: 127 }}
          />
        </View>
        <Divider style={{ margin: '25px 0' }} />
        <ContainedButton style={styles.confirmAction} size="large" processing={processing} disabled={disabled} onClick={submit}>
          {'RESEND INVITE'}
        </ContainedButton>
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
      maxWidth: 866,
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
    invitationCard: {
      maxWidth: 797,
      height: '100%',
      width: '100%',
      backgroundColor: colors.white,
      paddingTop: 34,
      paddingLeft: 60,
      paddingRight: 60,
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
    formRow: {
      margin: '16px 0',
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: 675,
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
    },
    primaryHeader: {
      color: colors.marineBlue,
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 16,
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
        marginRight: 10,
      },
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
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
    description: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
  })();

const styles: Styles = {
  input: {
    fontSize: 16,
  },
  confirmAction: {
    width: 187,
    height: 52,
    marginLeft: 'auto',
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

export type ResendOrganizationInvitation = Props;
export default ResendOrganizationInvitation;
