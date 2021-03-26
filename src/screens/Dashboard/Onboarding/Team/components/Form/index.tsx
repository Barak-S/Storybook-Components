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

interface UserGroup {
  value: string;
}

interface CompanyType {
  value: string;
}

export const OnboardingTeamScreenForm: FC<Props> = ({ style, data = {}, onSubmit, onChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { firstName, lastName, companyName, email, userGroup, companyType, message } = data;

  const submitDisabled = !email || !firstName || !lastName || !companyName || !userGroup || !companyType;

  const userGroups: UserGroup[] = [
    {
      value: 'Presenter',
    },
    {
      value: 'Listener',
    },
  ];

  const companyTypes: CompanyType[] = [
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

  const handleUserGroupChange = (key: keyof FormData) => (val: UserGroup) => {
    onChange && onChange({ ...data, [key]: val.value });
  };

  const handleCompanyTypeChange = (key: keyof FormData) => (val: CompanyType) => {
    onChange && onChange({ ...data, [key]: val.value });
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
        <FormSelect<UserGroup>
          className={mc(classes.half)}
          label="user group"
          options={userGroups}
          name="userGroup"
          value={userGroup ? userGroups.find(itm => itm.value === userGroup) : undefined}
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.value}
          onChange={handleUserGroupChange('userGroup')}
        />
        <FormSelect<CompanyType>
          className={mc(classes.half)}
          label="company type"
          options={companyTypes}
          name="companyType"
          value={companyType ? companyTypes.find(itm => itm.value === companyType) : undefined}
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.value}
          onChange={handleCompanyTypeChange('companyType')}
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
