import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { FormRow, FormSelect, FormTextArea, FormTextInput as TextInput } from 'components/Form';
import React, { FC } from 'react';
import { HandleTextInputChange, TeamFormData, HandleSelectFieldChange } from 'screens/Dashboard/Onboarding/Team';
import { colors, mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  data: TeamFormData;
  onTextFieldChange: HandleTextInputChange;
  onSelectFieldChange: HandleSelectFieldChange;
  onSubmit: () => void;
}

export const TeamMemberForm: FC<Props> = ({ data, onTextFieldChange, onSelectFieldChange, onSubmit }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { firstName, lastName, companyName, email, userGroup, companyType, message } = data;

  const submitDisabled = !email || !firstName || !lastName || !companyName || !userGroup || !companyType;

  const userGroups = [
    {
      value: 'Presenter',
    },
    {
      value: 'Listener',
    },
  ];

  const companyTypes = [
    {
      value: 'Sponsor',
    },
    {
      value: 'Beggar',
    },
  ];

  return (
    <Grid component="form" className={classes.container}>
      <FormRow>
        <TextInput
          className={classes.half}
          label="first name"
          value={firstName || ''}
          onChange={onTextFieldChange('firstName')}
        />
        <TextInput className={classes.half} label="last name" value={lastName || ''} onChange={onTextFieldChange('lastName')} />
      </FormRow>
      <FormRow>
        <TextInput label="company name" value={companyName || ''} onChange={onTextFieldChange('companyName')} />
      </FormRow>
      <FormRow>
        <TextInput label="email" value={email || ''} onChange={onTextFieldChange('email')} />
      </FormRow>
      <FormRow>
        <FormSelect
          className={mc(classes.half, classes.select)}
          label="user group"
          options={userGroups}
          name="userGroup"
          value={userGroup || ''}
          onChange={onSelectFieldChange}
        />
        <FormSelect
          className={mc(classes.half, classes.select)}
          label="company type"
          options={companyTypes}
          name="companyType"
          value={companyType || ''}
          onChange={onSelectFieldChange}
        />
      </FormRow>
      <FormRow>
        <FormTextArea label="invititation message" value={message || ''} onChange={onTextFieldChange('message')} />
      </FormRow>
      <FormRow style={{ justifyContent: 'flex-end' }}>
        <ContainedButton
          theme="small"
          onClick={onSubmit}
          endIcon="envelope-open"
          className={classes.submit}
          disabled={submitDisabled}
        >
          {'invite and add another'}
        </ContainedButton>
      </FormRow>
    </Grid>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingBottom: 35,
      [theme.breakpoints.up(1366)]: {
        maxWidth: 570,
      },
    },
    half: {
      width: '100%',
      marginBottom: 30,
      '&:last-child': {
        marginBottom: 0,
      },
      [theme.breakpoints.up('sm')]: {
        maxWidth: '48%',
        marginBottom: 0,
      },
      [theme.breakpoints.up(1366)]: {
        // maxWidth: 275,
      },
    },
    select: {
      '&.MuiFormControl-root': {
        display: 'flex',
      },
    },
    submit: {
      padding: 0,
      maxHeight: 35,
      borderRadius: 8,
      letterSpacing: 1.5,
      fontSize: 15,
      '&.MuiButton-root.MuiButton-contained:not(.Mui-disabled)': {
        background: colors.marineBlue,
        color: colors.white,
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: 288,
      },
    },
  })();

export default TeamMemberForm;
