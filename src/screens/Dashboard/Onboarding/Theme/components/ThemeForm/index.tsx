import { Grid, RadioGroup } from '@material-ui/core';
import {
  FormCheckboxInput,
  FormChipInput,
  FormChipInputItem,
  FormControlSection,
  FormRadioInput,
  FormSelect,
  FormToggle,
} from 'components/Form';
import React, { ChangeEvent, FC, useState } from 'react';
import { StyleProps, Styles, useScreenSizes } from 'styles';

interface Props extends StyleProps {
  data?: FormData;
  onChange?: (data: FormData) => void;
}

interface ThemeScreen {
  registrationType: string;
}

type FormData = Partial<ThemeScreen>;

interface RegistrationType {
  value: string;
}

interface StyleConfig {
  isDesktop: boolean;
}

export const OnboardingThemeForm: FC<Props> = ({ data = {}, onChange }) => {
  const { isDesktop } = useScreenSizes();
  const styleConfig: StyleConfig = { isDesktop };
  const styles = getStyles(styleConfig);
  const { registrationType } = data;
  const [radioValue, setRadioValue] = useState('all domains');
  const [chipData, setChipData] = useState<FormChipInputItem[]>([
    {
      key: `1`,
      label: 'one',
    },
    {
      key: `2`,
      label: 'two',
    },
    {
      key: `3`,
      label: 'three',
    },
  ]);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  const registrationTypes: RegistrationType[] = [
    {
      value: 'Public with Registration',
    },
    {
      value: 'Public without Registration',
    },
  ];

  const handleRegistrationTypeChange = (key: keyof FormData) => (val: RegistrationType) => {
    onChange && onChange({ ...data, [key]: val.value });
  };

  return (
    <Grid component="form" style={styles.container}>
      <FormControlSection
        title="Security Level"
        description="Open to the public, Public with registration, Private with registration adipiscing elitem ipsumadipiscing elitsed."
        hint="Lorem ipsum dolor sit amet."
      >
        <Grid style={styles.regSelectHolder}>
          <FormSelect<RegistrationType>
            label="registration type"
            options={registrationTypes}
            name="registrationType"
            value={registrationType ? registrationTypes.find(itm => itm.value === registrationType) : undefined}
            keyExtractor={itm => itm.value}
            titleExtractor={itm => itm.value}
            onChange={handleRegistrationTypeChange('registrationType')}
          />
        </Grid>
      </FormControlSection>
      <FormControlSection
        title="Multi-factor Authentication & Manual Approval"
        description="Open to the public, Public with registration, Private with registration adipiscing elitem ipsumadipiscing elitsed."
        hint="Lorem ipsum dolor sit amet."
      >
        <Grid style={styles.authTogglesHolder}>
          <FormToggle title="Multi-factor Authentication" />
          <FormToggle title="Require manual approval of users who sign up" />
        </Grid>
      </FormControlSection>
      <FormControlSection title="Email Domain Restriction" hint="Lorem ipsum dolor sit amet.">
        <RadioGroup aria-label="gender" name="gender1" value={radioValue} onChange={handleRadioChange}>
          <FormRadioInput value="all domains" label="All domains are available to sign up for this event" />
          <FormRadioInput value="following domains" label="The following domains are available to sign up for this event " />
        </RadioGroup>
        <FormChipInput items={chipData} onChange={v => setChipData(v)} />
      </FormControlSection>
      <FormControlSection
        title="Password Requirements"
        description="Open to the public, Public with registration, Private with registration adipiscing elitem ipsumadipiscing elitsed."
        hint="Lorem ipsum dolor sit amet."
      >
        <Grid style={styles.checkboxGroup}>
          <Grid style={styles.checkboxHolder}>
            <FormCheckboxInput label="Have at least one letter" />
            <FormCheckboxInput label="Have at least one capital letter" />
            <FormCheckboxInput label="Have at least one number" />
          </Grid>
          <Grid style={styles.checkboxHolder}>
            <FormCheckboxInput label="Have at least one special character" />
            <FormCheckboxInput label="Not be the same as the account name" />
          </Grid>
        </Grid>
      </FormControlSection>
      <FormControlSection
        title="Email Validation/Responce Requirements "
        description="Open to the public, Public with registration, Private with registration adipiscing elitem ipsumadipiscing elitsed."
        hint="Lorem ipsum dolor sit amet."
      >
        <FormToggle title="Validation of Email Addresses Required" />
      </FormControlSection>
    </Grid>
  );
};

const getStyles = ({ isDesktop }: StyleConfig): Styles => ({
  container: {},
  regSelectHolder: {
    width: '100%',
    maxWidth: isDesktop ? 276 : '100%',
  },
  authTogglesHolder: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: isDesktop ? 'row' : 'column',
    maxWidth: isDesktop ? '80%' : '100%',
  },
  checkboxGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: isDesktop ? 'row' : 'column',
    maxWidth: isDesktop ? '80%' : '100%',
  },
  checkboxHolder: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default OnboardingThemeForm;
