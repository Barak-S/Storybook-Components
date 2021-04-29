import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { FormRow, FormSelect, FormTextArea, FormTextInput as TextInput } from 'components/Form';
import { OrganizationInviteCreate, OrganizationRole, orgRoleArr } from 'core/api';
import React, { ChangeEvent, FC } from 'react';
import { mc, StyleProps } from 'styles';

interface Props extends StyleProps {
  data?: FormData;
  onChange?: (data: FormData) => void;
  onSubmit?: () => void;
}

type FormData = Partial<OrganizationInviteCreate>;

export const OnboardingTeamScreenForm: FC<Props> = ({ style, data = {}, onSubmit, onChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { firstName, lastName, email, role, title, message } = data;

  const submitDisabled = !email || !firstName || !lastName || !role;

  const handleTextFieldChanged = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange && onChange({ ...data, [key]: event.currentTarget.value });
  };

  const handleRoleChange = (key: keyof FormData) => (val: OrganizationRole) => {
    onChange && onChange({ ...data, [key]: val });
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
        <TextInput label="email" value={email || ''} onChange={handleTextFieldChanged('email')} />
      </FormRow>
      <FormRow>
        <FormSelect<OrganizationRole>
          label="role"
          options={orgRoleArr}
          value={role}
          keyExtractor={itm => itm}
          titleExtractor={itm => itm}
          onChange={handleRoleChange('role')}
        />
      </FormRow>
      <FormRow>
        <TextInput label="title" value={title || ''} onChange={handleTextFieldChanged('title')} />
      </FormRow>
      <FormRow>
        <FormTextArea label="Invititation message" value={message || ''} onChange={handleTextFieldChanged('message')} />
      </FormRow>
      <FormRow style={{ justifyContent: 'flex-end' }}>
        <ContainedButton
          style={{ width: 'auto' }}
          size="medium"
          onClick={onSubmit}
          endIcon="envelope-open"
          disabled={submitDisabled}
        >
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
