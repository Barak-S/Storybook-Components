import { Divider, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { FormControlSection, FormDragnDropImage, FormRow, FormSelect, FormSocialsInput, FormTextInput } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';
import { Social } from 'core/api';
import React, { ChangeEvent, FC } from 'react';
import { colors, mx, StyleProps, Styles } from 'styles';
import { OrganizationEditFormData as FormData, OrganizationEditFormErrors as FormErrs } from 'components/Organization';
import { useStyles } from './styles';

interface Props extends StyleProps {
  data?: FormData;
  socials?: Social[];
  errs?: FormErrs;
  onChange?: (data: Partial<FormData>) => void;
  handleSocialChange?: (items: Social[]) => void;
}

interface LocationState {
  value: string;
}
interface CompanyType {
  name: string;
  value: string;
}

export const ProfileOrganization: FC<Props> = ({ style, data, socials, handleSocialChange, errs, onChange }) => {
  const classes = useStyles();

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const companyTypes: CompanyType[] = [
    { name: 'Company', value: 'company' },
    { name: 'Nonprofit', value: 'non-profit' },
    { name: 'Individual', value: 'individual' },
  ];

  const handleTextFieldChanged = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (onChange) {
      onChange({ [key]: value });
    }
  };

  const handleSelectChange = (key: keyof FormData) => (val: CompanyType | LocationState) => {
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
                value={data?.name || ''}
                error={!!errs?.name}
                helperText={errs?.name}
                className={classes.inputFull}
                inputStyle={styles.input}
                onChange={handleTextFieldChanged('name')}
              />
            </View>
            <View row className={classes.formRow}>
              <FormTextInput
                label="Phone Number"
                required
                value={data?.phone || ''}
                error={!!errs?.phone}
                helperText={errs?.phone}
                className={classes.input2}
                inputStyle={styles.input}
                onChange={handleTextFieldChanged('phone')}
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
              <FormTextInput
                label="State"
                required
                value={data?.state || ''}
                error={!!errs?.state}
                helperText={errs?.state}
                className={classes.input2}
                inputStyle={styles.input}
                onChange={handleTextFieldChanged('state')}
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
                keyExtractor={itm => itm.name}
                titleExtractor={itm => itm.name}
                options={companyTypes}
                name="type"
                value={data?.type ? companyTypes.find(itm => itm.value === data.type) : undefined}
                onChange={handleSelectChange('type')}
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
              <FormSocialsInput items={socials} onChange={handleSocialChange} />
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
