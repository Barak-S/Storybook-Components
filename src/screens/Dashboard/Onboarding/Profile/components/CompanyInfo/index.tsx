import { Grid } from '@material-ui/core';
import { FormCountryInput, FormRow } from 'components/Form';
import TextInput from 'components/Form/TextInput';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, ChangeEvent } from 'react';
import { colors, ms, mx, StyleProps, Styles, useScreenSizes } from 'styles';
import { FormErrors, ProfileScreenFormData } from '../Form';
import { OnboardingFormHeading as Heading } from '../FormHeading';

interface Props extends StyleProps {
  data?: ProfileScreenFormData;
  errors?: FormErrors;
  onChange?: (data: ProfileScreenFormData) => void;
}

interface StylesConfig {
  isMobile: boolean;
  isDesktop: boolean;
}

export const OnboardingProfileCompanyInfo: FC<Props> = ({ data, errors, onChange, style }) => {
  const handleTextFieldChanged = (key: keyof ProfileScreenFormData) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChange && onChange({ ...data, [key]: event.currentTarget.value });
  };

  const { isMobile, isDesktop } = useScreenSizes();

  const styleProps: StylesConfig = {
    isMobile,
    isDesktop,
  };

  const styles = getStyles(styleProps);

  return (
    <Grid style={ms(styles.container, style)}>
      <Grid style={ms(styles.fieldsLimiter, styles.formTop)}>
        <Heading
          style={styles.heading}
          title="Company Info"
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed."
        />
        <FormRow>
          <TextInput
            required
            label="company name"
            value={data?.companyName || ''}
            error={!!errors?.companyName}
            onChange={handleTextFieldChanged('companyName')}
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.halfInput}
            required
            label="phone number"
            value={data?.companyPhone || ''}
            error={!!errors?.companyPhone}
            onChange={handleTextFieldChanged('companyPhone')}
          />
          <FormCountryInput
            style={ms(styles.halfInput, styles.lastChild)}
            required
            label="country"
            value={data?.country || ''}
            error={!!errors?.country}
            onChange={handleTextFieldChanged('country')}
          />
        </FormRow>
        <FormRow style={{ marginBottom: 50 }}>
          <TextInput
            style={styles.halfInput}
            required
            label="state"
            value={data?.state || ''}
            error={!!errors?.state}
            onChange={handleTextFieldChanged('state')}
          />
          <TextInput
            style={ms(styles.halfInput, styles.lastChild)}
            required
            label="city"
            value={data?.city || ''}
            error={!!errors?.city}
            onChange={handleTextFieldChanged('city')}
          />
        </FormRow>
        <Heading title="website" style={{ marginBottom: 20 }} />
        <FormRow>
          <TextInput
            label="website"
            adornmentType="transparent"
            value={data?.website || ''}
            error={!!errors?.website}
            iconStart={<LineAwesomeIcon type="globe" style={{ color: colors.greyish }} />}
            onChange={handleTextFieldChanged('website')}
          />
        </FormRow>
      </Grid>
      <Grid component="span" style={styles.line} />
      <Grid style={styles.fieldsLimiter}>
        <Heading
          title="Contact Email"
          caption="This email will be for ipsum dolor sit amet, consectetur adipiscing elitsed."
          style={{ marginBottom: 20 }}
        />
        <FormRow>
          <TextInput
            label="email"
            adornmentType="transparent"
            value={data?.email || ''}
            error={!!errors?.email}
            iconStart={<LineAwesomeIcon type="envelope-open-text" style={{ color: colors.greyish }} />}
            onChange={handleTextFieldChanged('email')}
          />
        </FormRow>
      </Grid>
    </Grid>
  );
};

const getStyles = ({ isDesktop, isMobile }: StylesConfig): Styles => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  fieldsLimiter: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    ...(isDesktop && { maxWidth: 523 }),
  },
  formTop: {
    marginBottom: 36,
  },
  line: {
    ...mx.borderBottom(1, 'solid', colors.silverTwo),
    marginBottom: 28,
  },
  heading: {
    marginBottom: 25,
  },
  halfInput: {
    width: '100%',
    maxWidth: isMobile ? '100%' : '48%',
    ...(isMobile && { marginBottom: 30 }),
  },
  lastChild: {
    marginRight: 0,
    marginBottom: 0,
  },
});

export default OnboardingProfileCompanyInfo;
