import { Grid } from '@material-ui/core';
import { FormOrganizationRoleSelect, FormTextArea, FormTextInput } from 'components/Form';
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

  return (
    <Grid style={ms(styles.container, style)} component="form" container direction="column">
      <Grid style={styles.rowIndent} item container spacing={2}>
        <Grid item md>
          <FormTextInput label="first name" value={firstName || ''} onChange={handleTextFieldChanged('firstName')} />
        </Grid>
        <Grid item md>
          <FormTextInput label="last name" value={lastName || ''} onChange={handleTextFieldChanged('lastName')} />
        </Grid>
      </Grid>
      <Grid style={styles.rowIndent} item>
        <FormTextInput label="email" value={email || ''} onChange={handleTextFieldChanged('email')} />
      </Grid>
      <Grid style={styles.rowIndent} item>
        <FormOrganizationRoleSelect label="role" exclude={['owner']} value={role} onChange={handleRoleChange('role')} />
      </Grid>
      <Grid style={styles.rowIndent} item>
        <FormTextInput label="title" value={title || ''} onChange={handleTextFieldChanged('title')} />
      </Grid>
      <Grid style={styles.messageWrap} item>
        <FormTextArea label="Invititation message" value={message || ''} onChange={handleTextFieldChanged('message')} />
      </Grid>
    </Grid>
  );
};

const styles: Styles = {
  container: {
    width: '100%',
  },
  rowIndent: {
    marginBottom: 25,
  },
  messageWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
};

export type TeamMemberCreateInviteFormData = FormData;
export default TeamMemberCreateInviteForm;
