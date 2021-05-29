import { Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { FormControlSection, FormToggle } from 'components/Form';
import FormTagsInput from 'components/Form/TagsInput';
import { EventSettings } from 'core/api';
import React, { FC } from 'react';
import { ms, StyleProps, Styles } from 'styles';
import { GenericFormData, GenericFormErrors, GenericFormProcessing } from 'utils';

import EventSettingsEmailRestriction from './components/EmailRestriction';
import EventSettingsPassRequirements from './components/PassRequirements';

type FormData = GenericFormData<EventSettings>;
type FormErrors = GenericFormErrors<EventSettings>;
type FormProcessing = GenericFormProcessing<EventSettings>;

interface Props extends StyleProps {
  data?: FormData;
  errors?: FormErrors;
  processing?: FormProcessing;
  onChange?: (data: FormData) => void;
}

export const EventBasicCreateFromSettings: FC<Props> = ({ style, data, onChange }) => {
  const handleDataChnage = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  return (
    <View style={ms(styles.container, style)}>
      <FormControlSection
        title="Multi-factor Authentication & Manual Approval"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing elitsed."
      >
        <Grid container>
          <Grid item md={6} xs={12}>
            <FormToggle
              title="Multi-factor Authentication"
              value={data?.multiFactorAuth || false}
              onChange={handleDataChnage('multiFactorAuth')}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormToggle
              title="Require manual approval of users who sign up"
              value={data?.registrationManualApproval || false}
              onChange={handleDataChnage('registrationManualApproval')}
            />
          </Grid>
        </Grid>
      </FormControlSection>
      <EventSettingsEmailRestriction
        title="Email Domain Restriction"
        items={data?.allowedEmailDomains}
        onChange={handleDataChnage('allowedEmailDomains')}
      />
      <EventSettingsPassRequirements
        title="Password Requirements"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed."
        items={data?.passRequirements}
        onChange={handleDataChnage('passRequirements')}
      />
      <FormControlSection
        title="Email Validation/Responce Requirements "
        description="Lorem ipsum dolor sit amet, consectetur adipiscingum dolor sit ametonsectetur adipiscing elitsed."
      >
        <FormToggle
          title="Validation of Email Addresses Required"
          value={data?.emailValidation || false}
          onChange={handleDataChnage('emailValidation')}
        />
      </FormControlSection>
      <FormControlSection title="Assign SEO Event Tags" description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.">
        <FormTagsInput items={data?.seoTags} label="Add Tags" onChange={handleDataChnage('seoTags')} />
      </FormControlSection>
    </View>
  );
};

const styles: Styles = {
  container: {},
};

export type EventBasicCreateFromSettingsProps = Props;
export default EventBasicCreateFromSettings;
