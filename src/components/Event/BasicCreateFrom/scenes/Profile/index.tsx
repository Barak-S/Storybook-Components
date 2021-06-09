import { Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { FormControlSection, FormCountryInput, FormDragnDropImage, FormSocialsInput, FormTextInput } from 'components/Form';
import { EventProfile } from 'core/api';
import { modCloudinaryUrl } from 'core/cloudinary';
import React, { ChangeEvent, FC } from 'react';
import { ms, StyleProps, Styles, withDensity } from 'styles';
import { GenericFormData, GenericFormErrors, GenericFormProcessing } from 'utils';

type FormData = GenericFormData<EventProfile>;
type FormErrors = GenericFormErrors<EventProfile>;
type FormProcessing = GenericFormProcessing<EventProfile>;

interface Props extends StyleProps {
  data?: FormData;
  errors?: FormErrors;
  processing?: FormProcessing;
  onLogoFileSelect?: (file: File) => void;
  onChange?: (data: FormData) => void;
}

export const EventBasicCreateFromProfile: FC<Props> = ({ style, data, processing, onLogoFileSelect, onChange }) => {
  const handleTextInputChange = <K extends keyof FormData>(key: K) => (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const handleDataChange = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  return (
    <View style={ms(styles.container, style)}>
      <FormControlSection
        title="Profile"
        hint="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed"
      >
        <Grid style={styles.rowBottomIndent} container spacing={2} direction="row">
          <Grid item sm={6} xs={12}>
            <FormTextInput label="Phone" value={data?.phone || ''} onChange={handleTextInputChange('phone')} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormCountryInput label="Country" value={data?.country || ''} onChange={handleDataChange('country')} />
          </Grid>
        </Grid>
        <Grid style={styles.rowBottomIndent} container spacing={2} direction="row">
          <Grid item sm={6} xs={12}>
            <FormTextInput label="State" value={data?.state || ''} onChange={handleTextInputChange('state')} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormTextInput label="City" value={data?.city || ''} onChange={handleTextInputChange('city')} />
          </Grid>
        </Grid>
        <Grid style={styles.rowBottomIndent} container>
          <FormTextInput label="Contact Email" value={data?.email || ''} onChange={handleTextInputChange('email')} />
        </Grid>
        <Grid style={styles.rowBottomIndent} container>
          <FormTextInput label="Website" value={data?.website || ''} onChange={handleTextInputChange('website')} />
        </Grid>
        <Grid container>
          <FormSocialsInput items={data?.socials} onChange={handleDataChange('socials')} />
        </Grid>
      </FormControlSection>
      <FormControlSection
        title="Logo"
        hint="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed"
      >
        <FormDragnDropImage
          style={styles.logo}
          src={data?.logo ? modCloudinaryUrl(data.logo, { transform: { width: withDensity(535), crop: 'fill' } }) : undefined}
          processing={processing?.logo}
          onFileSelect={onLogoFileSelect}
        />
      </FormControlSection>
    </View>
  );
};

const styles: Styles = {
  container: {},
  logo: {
    height: 140,
  },
  rowBottomIndent: {
    marginBottom: 20,
  },
};

export type EventBasicCreateFromProfileProps = Props;
export type EventBasicCreateFromProfileProcessing = FormProcessing;
export default EventBasicCreateFromProfile;
