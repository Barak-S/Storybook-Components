import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { FormRow, FormSelect, FormTextArea, FormTextInput as TextInput } from 'components/Form';
import { TeamMemberInvite } from 'core/api';
import React, { ChangeEvent, FC } from 'react';
import { mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  data?: FormData;
  onChange?: (data: FormData) => void;
  onSubmit?: () => void;
}

type FormData = Partial<TeamMemberInvite>;

export const OnboardingTeamScreenForm: FC<Props> = ({ style, data = {}, onSubmit, onChange }) => {
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

  const handleTextFieldChanged = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange && onChange({ ...data, [key]: event.currentTarget.value });
  };

  const handleSelectChange = (key: keyof FormData) => (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    onChange && onChange({ ...data, [key]: event.currentTarget.value });
  };

  return (
    <Grid style={style} component="form" className={classes.container}>
      <FormRow>
        <TextInput
          className={classes.half}
          label="first name"
          value={firstName || ''}
          onChange={handleTextFieldChanged('firstName')}
        />
        <TextInput
          className={classes.half}
          label="last name"
          value={lastName || ''}
          onChange={handleTextFieldChanged('lastName')}
        />
      </FormRow>
      <FormRow>
        <TextInput label="company name" value={companyName || ''} onChange={handleTextFieldChanged('companyName')} />
      </FormRow>
      <FormRow>
        <TextInput label="email" value={email || ''} onChange={handleTextFieldChanged('email')} />
      </FormRow>
      <FormRow>
        <FormSelect
          className={mc(classes.half)}
          label="user group"
          options={userGroups}
          name="userGroup"
          value={userGroup || ''}
          onChange={handleSelectChange('userGroup')}
        />
        <FormSelect
          className={mc(classes.half)}
          label="company type"
          options={companyTypes}
          name="companyType"
          value={companyType || ''}
          onChange={handleSelectChange('companyType')}
        />
      </FormRow>
      <FormRow>
        <FormTextArea label="Invititation message" value={message || ''} onChange={handleTextFieldChanged('message')} />
      </FormRow>
      <FormRow style={{ justifyContent: 'flex-end' }}>
        <ContainedButton size="medium" onClick={onSubmit} endIcon="envelope-open" disabled={submitDisabled}>
          {'Invite and add another'}
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
    },
  })();

export type OnboardingTeamScreenFormData = FormData;
export default OnboardingTeamScreenForm;
