import { Grid } from '@material-ui/core';
import { FormControlInfo, FormCountryInput, FormDivider, FormDragnDropImage, FormInput, FormTextInput } from 'components/Form';
import { OrganizationUpdate, OrganizationUpdateSchema, phoneValidatorFn } from 'core/api';
import { modCloudinaryUrl } from 'core/cloudinary';
import Joi from 'joi';
import React, { ChangeEvent, FC, useState } from 'react';
import { ms, StyleProps, Styles, withDensity } from 'styles';
import { formKeyToFieldName, GenericFormData, GenericFormErrors, GenericFormProcessing } from 'utils';

type FormData = GenericFormData<OrganizationUpdate>;
type FormErrors = GenericFormErrors<OrganizationUpdate>;
type FormProcessing = GenericFormProcessing<OrganizationUpdate>;

interface Props extends StyleProps {
  data?: FormData;
  processing?: FormProcessing;
  onChange?: (data: OrganizationUpdate, valid: boolean) => void;
  onLogoFileSelect?: (file: File) => void;
}

const formSchema = OrganizationUpdateSchema.keys({
  name: Joi.string().required(),
  phone: Joi.string().custom(phoneValidatorFn).required(),
  country: Joi.string().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
});

export const OrganizationEditForm: FC<Props> = ({ style, data, processing, onChange, onLogoFileSelect }) => {
  const [errors, setErrors] = useState<FormErrors | undefined>();

  const handleTextFieldChanged = (key: keyof OrganizationUpdate) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    handleChange(key, event.currentTarget.value);
  };

  const handleDataChange = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    handleChange(key, val);
  };

  const handleChange = <K extends keyof FormData>(key: K, val: FormData[K]) => {
    resetErrForKey(key);
    const newData = data ? { ...data, [key]: val } : { [key]: val };
    const valid = formSchema.validate(newData).error === undefined;
    onChange && onChange(newData, valid);
  };

  const resetErrForKey = <K extends keyof FormData>(key: K) => {
    if (errors && errors[key]) {
      setErrors({ [key]: undefined });
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
    <Grid style={ms(styles.container, style)} container direction="column" spacing={3}>
      <Grid item>
        <FormControlInfo
          title="Organization Logo"
          description="Lorem ipsum dolor sit amet, 600 x 200px and 1MB or less"
          hint="Logo hint"
        />
      </Grid>
      <Grid item>
        <FormDragnDropImage
          style={styles.logo}
          src={data?.logo ? modCloudinaryUrl(data.logo, { transform: { width: withDensity(535), crop: 'fill' } }) : undefined}
          processing={processing?.logo}
          onFileSelect={onLogoFileSelect}
        />
      </Grid>
      <Grid item>
        <FormControlInfo
          title="Organization Information"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed."
        />
      </Grid>
      <Grid item>
        <FormTextInput
          required
          label="Organization Name"
          value={data?.name || ''}
          error={!!errors?.name}
          helperText={errors?.name}
          onBlur={handleBlur('name')}
          onChange={handleTextFieldChanged('name')}
        />
      </Grid>
      <Grid item container direction="row" spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormTextInput
            required
            fullWidth
            label="Phone Number"
            value={data?.phone || ''}
            error={!!errors?.phone}
            helperText={errors?.phone}
            onBlur={handleBlur('phone')}
            onChange={handleTextFieldChanged('phone')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormCountryInput
            required
            label="Country"
            value={data?.country || ''}
            error={!!errors?.country}
            helperText={errors?.country}
            onChange={handleDataChange('country')}
            onBlur={handleBlur('country')}
          />
        </Grid>
      </Grid>
      <Grid item container direction="row" spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormTextInput
            required
            label="State"
            value={data?.state || ''}
            error={!!errors?.state}
            helperText={errors?.state}
            onBlur={handleBlur('state')}
            onChange={handleTextFieldChanged('state')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormTextInput
            required
            label="City"
            value={data?.city || ''}
            error={!!errors?.city}
            helperText={errors?.city}
            onBlur={handleBlur('city')}
            onChange={handleTextFieldChanged('city')}
          />
        </Grid>
      </Grid>
      <Grid item>
        <FormControlInfo title="Website" />
      </Grid>
      <Grid item>
        <FormInput
          placeholder="Website"
          startIcon="globe"
          fullWidth
          value={data?.website || ''}
          error={!!errors?.website}
          helperText={errors?.website}
          onBlur={handleBlur('website')}
          onChange={handleTextFieldChanged('website')}
        />
      </Grid>
      <FormDivider />
      <Grid item>
        <FormControlInfo title="Contact Email" description="This email will be consectetur adipiscing elitsed." />
      </Grid>
      <Grid item>
        <FormInput
          fullWidth
          placeholder="Email"
          type="email"
          startIcon="envelope-open-text"
          value={data?.email || ''}
          error={!!errors?.email}
          helperText={errors?.email}
          onBlur={handleBlur('email')}
          onChange={handleTextFieldChanged('email')}
        />
      </Grid>
    </Grid>
  );
};

const styles: Styles = {
  container: {
    paddingBottom: 30,
  },
  logo: {
    height: 140,
  },
};

export type OrganizationEditFormData = FormData;
export type OrganizationEditFormErrors = FormErrors;
export type OrganizationEditFormProcessing = FormProcessing;
export default OrganizationEditForm;
