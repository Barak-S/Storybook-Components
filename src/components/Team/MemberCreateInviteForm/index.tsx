import { Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import { FormOrganizationRoleSelect, FormRow, FormTextArea, FormTextInput } from 'components/Form';
import { OrganizationInviteCreate, OrganizationRole } from 'core/api';
import React, { ChangeEvent, FC } from 'react';
import { ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  data?: FormData;
  onChange?: (data: FormData) => void;
}

type FormData = Partial<OrganizationInviteCreate>;

export const TeamMemberCreateInviteForm: FC<Props> = ({ style, data = {}, onChange }) => {
  const { firstName, lastName, email, role, title, message } = data;

  const handleTextFieldChanged = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange && onChange({ ...data, [key]: event.currentTarget.value });
  };

  const handleRoleChange = (key: keyof FormData) => (val: OrganizationRole) => {
    onChange && onChange({ ...data, [key]: val });
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid style={ms(styles.container, style)} component="form">
      <FormRow>
        <FormTextInput
          className={classes.half}
          label="first name"
          value={firstName || ''}
          onChange={handleTextFieldChanged('firstName')}
        />
        <FormTextInput
          className={classes.half}
          label="last name"
          value={lastName || ''}
          onChange={handleTextFieldChanged('lastName')}
        />
      </FormRow>
      <FormRow>
        <FormTextInput label="email" value={email || ''} onChange={handleTextFieldChanged('email')} />
      </FormRow>
      <FormRow>
        <FormOrganizationRoleSelect label="role" exclude={['owner']} value={role} onChange={handleRoleChange('role')} />
      </FormRow>
      <FormRow>
        <FormTextInput label="title" value={title || ''} onChange={handleTextFieldChanged('title')} />
      </FormRow>
      <FormRow>
        <FormTextArea label="Invititation message" value={message || ''} onChange={handleTextFieldChanged('message')} />
      </FormRow>
    </Grid>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
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

export type TeamMemberCreateInviteFormData = FormData;
export default TeamMemberCreateInviteForm;
