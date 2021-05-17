import { Divider, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { FormControlSection, FormDragnDropImage, FormRow, FormSelect, FormSocialsInput, FormTextInput } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';
import { Social } from 'core/api';
import React, { ChangeEvent, FC, useState } from 'react';
import { colors, mx, StyleProps, Styles } from 'styles';

import { useStyles } from './styles';

interface Props extends StyleProps {
  data?: FormData;
  errs?: FormErrs;
  onChange?: (data: Partial<FormData>) => void;
}

interface FormData {
  orgName?: string;
  phoneNumber?: string;
  email?: string;
  country?: string;
  state?: string;
  city?: string;
  website?: string;
  companyType?: string;
}

interface LocationState {
  value: string;
}
interface CompanyType {
  value: string;
}

type FormErrs = Partial<Record<keyof FormData, string>> & { form?: string };

export const ProfileOrganization: FC<Props> = ({ style, data, errs, onChange }) => {
  const [socials, setSocials] = useState<Social[]>([]);
  const classes = useStyles();

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const locationState: CompanyType[] = [{ value: 'New York' }, { value: 'Pennsylvania' }, { value: 'New Hampshire' }];
  const companyTypes: CompanyType[] = [{ value: 'Comercial' }, { value: 'Non profit' }];

  const handleTextFieldChanged = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (onChange) {
      onChange({ [key]: value });
    }
  };

  const handleCompanyTypeChange = (key: keyof FormData) => (val: CompanyType) => {
    onChange && onChange({ ...data, [key]: val.value });
  };
  const handleLocationStateChange = (key: keyof FormData) => (val: LocationState) => {
    onChange && onChange({ ...data, [key]: val.value });
  };

  return (
    <div className={classes.container} style={style}>
      <div className={classes.headerSection}>
        <span className={classes.title}>{'Organization Information'}</span>
        <span className={classes.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetud.elitsed.'}
        </span>
      </div>
      <div className={classes.blockInf}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.contactSection}>
            <View style={{ marginTop: 14.5 }}>
              <FormTextInput
                label="Organization Name"
                required
                value={data?.orgName || ''}
                error={!!errs?.orgName}
                helperText={errs?.orgName}
                className={classes.inputFull}
                inputStyle={styles.input}
                onChange={handleTextFieldChanged('orgName')}
              />
            </View>
            <View row className={classes.formRow}>
              <FormTextInput
                label="Phone Number"
                required
                value={data?.phoneNumber || ''}
                error={!!errs?.phoneNumber}
                helperText={errs?.phoneNumber}
                className={classes.input2}
                inputStyle={styles.input}
                onChange={handleTextFieldChanged('phoneNumber')}
              />
              <FormTextInput
                label="Country"
                required
                value={data?.country || ''}
                error={!!errs?.country}
                helperText={errs?.country}
                className={classes.input}
                inputStyle={styles.input}
                onChange={handleTextFieldChanged('country')}
              />
            </View>
            <View row className={classes.formRow}>
              <FormSelect
                className={classes.formSelect}
                classes={socialSelectClasses}
                required
                error={!!errs?.state}
                helperText={errs?.state}
                fullWidth
                label="State"
                keyExtractor={itm => itm.value}
                titleExtractor={itm => itm.value}
                options={locationState}
                name="companyType"
                value={data?.state ? locationState.find(itm => itm.value === data.state) : undefined}
                onChange={handleLocationStateChange('state')}
              />
              <FormTextInput
                label="City"
                required
                value={data?.city || ''}
                error={!!errs?.city}
                helperText={errs?.city}
                className={classes.input}
                inputStyle={styles.input}
                onChange={handleTextFieldChanged('city')}
              />
            </View>
            <View>
              <FormTextInput
                label="website"
                value={data?.website || ''}
                error={!!errs?.website}
                className={classes.inputFull}
                inputStyle={styles.input}
                adornmentType="transparent"
                onChange={handleTextFieldChanged('website')}
                iconStart={<LineAwesomeIcon type="globe" style={{ color: colors.greyish }} />}
              />
            </View>
            <FormRow style={{ marginBottom: 4 }} className={classes.formRow}>
              <FormSelect
                classes={socialSelectClasses}
                fullWidth
                label="Company Type"
                keyExtractor={itm => itm.value}
                titleExtractor={itm => itm.value}
                options={companyTypes}
                name="companyType"
                value={data?.companyType ? companyTypes.find(itm => itm.value === data.companyType) : undefined}
                onChange={handleCompanyTypeChange('companyType')}
              />
            </FormRow>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.uploadSection}>
            <View>
              <span className={classes.subHeader}>{'Organization Logo'}</span>
              <span className={classes.subtitle}>{'600 x 200px and 1MB or less'}</span>
              <FormDragnDropImage className={classes.uploadImg} style={styles.dragField} />
            </View>
          </Grid>
          <Divider style={styles.divider} />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className={classes.headerSection}>
              <span className={classes.title} style={{ paddingTop: 0 }}>
                {'Contact Email'}
              </span>
              <span className={classes.subtitle} style={{ paddingBottom: 12 }}>
                {'This email will be for ipsum dolor sit amet, consectetur adipiscing elitsed.'}
              </span>
            </div>
            <View>
              <FormTextInput
                label="email"
                style={{ marginBottom: 0 }}
                value={data?.email || ''}
                error={!!errs?.email}
                className={classes.inputFull}
                helperText={errs?.email}
                inputStyle={styles.input}
                adornmentType="transparent"
                onChange={handleTextFieldChanged('email')}
                iconStart={
                  <LineAwesomeIcon type="envelope-open-text" style={{ color: errs?.email ? colors.error : colors.greyish }} />
                }
              />
            </View>
          </Grid>
          <Divider style={styles.divider} />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <FormControlSection
              title="Organization Social Media Accounts"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed."
              borderTop={false}
            >
              <FormSocialsInput items={socials} onChange={setSocials} />
            </FormControlSection>
          </Grid>
          <Divider style={styles.divider} />
        </Grid>
      </div>
    </div>
  );
};

const styles: Styles = {
  divider: {
    width: '100%',
    marginTop: 36,
    marginBottom: 36,
  },
  input: {
    fontSize: 16,
  },
  dragField: {
    ...mx.border(3, 'dashed', colors.silverTwo),
  },
};
export type OrganizationChangeData = FormData;
export type OrganizationChangeErrs = FormErrs;
export type ProfileOrganization = Props;
export default ProfileOrganization;
