import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { StyleProps, Styles, useScreenSizes } from 'styles';
import CompanyInfo from '../CompanyInfo';
import EventLogo from '../Logo';
import ProfilePicture from '../Picture';

interface Props extends StyleProps {
  data?: ProfileScreenFormData;
  errors?: FormErrors;
  onChange?: (data: ProfileScreenFormData) => void;
}

export interface ProfileScreenFormData {
  companyName?: string;
  companyPhone?: string;
  country?: string;
  state?: string;
  city?: string;
  website?: string;
  email?: string;
}

export type FormErrors = Partial<Record<keyof ProfileScreenFormData, string>>;

interface StylesConfig {
  isDesktop: boolean;
}

export const OnboardingProfileScreenForm: FC<Props> = ({ data, errors, onChange }) => {
  const { isDesktop } = useScreenSizes();

  const styles = getStyles({ isDesktop });

  return (
    <Grid component="form" style={styles.container}>
      <Grid style={styles.images}>
        <ProfilePicture style={styles.profilePicture} />
        <EventLogo />
      </Grid>
      <CompanyInfo style={styles.companyInfo} data={data} errors={errors} onChange={onChange} />
    </Grid>
  );
};

const getStyles = ({ isDesktop }: StylesConfig): Styles => ({
  container: {
    paddingBottom: 56,
  },
  images: {
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column',
    width: '100%',
    marginBottom: 30,
  },
  profilePicture: {
    ...(!isDesktop && { marginBottom: 25 }),
    ...(isDesktop && { marginRight: 86 }),
  },
});

export default OnboardingProfileScreenForm;
