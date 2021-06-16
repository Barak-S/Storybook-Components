import { Grid } from '@material-ui/core';
import { FormOrganizationRoleSelect, FormTextArea, FormTextInput } from 'components/Form';
import { OrganizationInviteCreate, orgInviteCreateSchema as formSchema } from 'core/api';
import React, { ChangeEvent, FC, useState } from 'react';
import { ms, StyleProps, Styles } from 'styles';
import { formKeyToFieldName, GenericFormData, GenericFormErrors } from 'utils';

type FormData = GenericFormData<OrganizationInviteCreate>;
type FormErrors = GenericFormErrors<OrganizationInviteCreate>;

interface Props extends StyleProps {
  data?: FormData;
  onChange?: (data: FormData) => void;
}

export const TeamMemberCreateInviteForm: FC<Props> = ({ style, data = {}, onChange }) => {
  const [errors, setErrors] = useState<FormErrors>();

  const { firstName, lastName, email, role, title, message } = data;

  const handleTextFieldChanged = <K extends keyof FormData>(key: K) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    handleChange({ ...data, [key]: event.currentTarget.value });
  };

  const handleDataChange = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    handleChange({ ...data, [key]: val });
  };

  const handleChange = (newData: FormData) => {
    onChange && onChange(newData);
  };

  const handleFocus = <K extends keyof FormData>(key: K) => () => {
    if (errors && errors[key]) {
      setErrors(v => (v ? { ...v, [key]: undefined } : { [key]: undefined }));
    }
  };

  const handleBlur = <K extends keyof FormData>(key: K) => () => {
    const { error } = formSchema.validate(data, { abortEarly: false });
    if (!error) return;
    for (const detail of error.details) {
      if (detail.context?.key === key) {
        const { message: rawMsg } = detail;
        const message = rawMsg.replace(`"${key}"`, formKeyToFieldName(key));
        setErrors(v => (v ? { ...v, [key]: message } : { [key]: message }));
      }
    }
  };

  return (
    <Grid style={ms(styles.container, style)} component="form" container direction="column">
      <Grid style={styles.rowIndent} item container direction="row" spacing={2}>
        <Grid item md={6} xs={12}>
          <FormTextInput
            label="First name"
            value={firstName || ''}
            error={!!errors?.firstName}
            helperText={errors?.firstName}
            onFocus={handleFocus('firstName')}
            onBlur={handleBlur('firstName')}
            required
            onChange={handleTextFieldChanged('firstName')}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormTextInput
            label="Last name"
            value={lastName || ''}
            error={!!errors?.lastName}
            helperText={errors?.lastName}
            onFocus={handleFocus('lastName')}
            onBlur={handleBlur('lastName')}
            required
            onChange={handleTextFieldChanged('lastName')}
          />
        </Grid>
      </Grid>
      <Grid style={styles.rowIndent} item>
        <FormTextInput label="Title" value={title || ''} error={!!errors?.title} onChange={handleTextFieldChanged('title')} />
      </Grid>
      <Grid style={styles.rowIndent} item>
        <FormTextInput
          label="Email"
          value={email || ''}
          error={!!errors?.email}
          helperText={errors?.email}
          required
          onFocus={handleFocus('email')}
          onBlur={handleBlur('email')}
          onChange={handleTextFieldChanged('email')}
        />
      </Grid>
      <Grid style={styles.rowIndent} item>
        <FormOrganizationRoleSelect
          label="Role"
          required
          exclude={['owner']}
          value={role}
          error={!!errors?.role}
          helperText={errors?.role}
          onChange={handleDataChange('role')}
        />
      </Grid>
      <Grid item container direction="column">
        <FormTextArea
          label="Invititation message"
          value={message || ''}
          error={!!errors?.message}
          helperText={errors?.message}
          resize
          rowsMin={1}
          onChange={handleTextFieldChanged('message')}
        />
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
};

export type TeamMemberCreateInviteFormData = FormData;
export type TeamMemberCreateInviteFormErrors = FormErrors;
export default TeamMemberCreateInviteForm;
