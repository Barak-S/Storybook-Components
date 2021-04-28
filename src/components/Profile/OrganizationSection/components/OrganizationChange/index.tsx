import { Divider, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { FormTextInput, FormSelect, FormDragnDropImage, FormRow, FormSocialSelect } from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { StyleProps, colors, Styles } from 'styles';

import { useStyles } from './styles';

type Props = StyleProps;

export const ProfileOrganization: FC<Props> = ({ style }) => {
  const classes = useStyles();

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const companytypes = [{ value: 'Comercial' }, { value: 'Non profit' }];

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
              <FormTextInput label="Organization Name" required className={classes.inputFull} inputStyle={styles.input} />
            </View>
            <View row className={classes.formRow}>
              <FormTextInput label="Phone Number" required className={classes.input} inputStyle={styles.input} />
              <FormTextInput label="Country" required className={classes.input} inputStyle={styles.input} />
            </View>
            <View row className={classes.formRow}>
              <FormSelect
                className={classes.formSelect}
                classes={socialSelectClasses}
                fullWidth
                label="State"
                required
                options={companytypes}
                keyExtractor={itm => itm.value}
                titleExtractor={itm => itm.value}
              />
              <FormTextInput label="City" required className={classes.input} inputStyle={styles.input} />
            </View>
            <View>
              <FormTextInput
                label="website"
                className={classes.inputFull}
                inputStyle={styles.input}
                adornmentType="transparent"
                iconStart={<LineAwesomeIcon type="globe" style={{ color: colors.greyish }} />}
              />
            </View>
            <FormRow style={{ marginBottom: 4 }} className={classes.formRow}>
              <FormSelect
                classes={socialSelectClasses}
                fullWidth
                label="Company Type"
                required
                options={companytypes}
                keyExtractor={itm => itm.value}
                titleExtractor={itm => itm.value}
              />
            </FormRow>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.uploadSection}>
            <View>
              <span className={classes.subHeader}>{'Organization Logo'}</span>
              <span className={classes.subtitle}>{'600 x 200px and 1MB or less'}</span>
              <FormDragnDropImage className={classes.uploadImg} />
            </View>
          </Grid>
          <Divider style={styles.divider} />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className={classes.headerSection}>
              <span className={classes.title}>{'Contact Email'}</span>
              <span className={classes.subtitle}>
                {'This email will be for ipsum dolor sit amet, consectetur adipiscing elitsed.'}
              </span>
            </div>
            <View>
              <FormTextInput
                label="email"
                className={classes.inputFull}
                inputStyle={styles.input}
                adornmentType="transparent"
                iconStart={<LineAwesomeIcon type="envelope-open-text" style={{ color: colors.greyish }} />}
              />
            </View>
          </Grid>
          <Divider style={styles.divider} />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className={classes.headerSection}>
              <span className={classes.title}>{'Organization Social Media Accounts'}</span>
              <span className={classes.subtitle} style={{ marginBottom: 30 }}>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}
              </span>
            </div>
            <div className={classes.socBlock}>
              <FormSocialSelect
                classes={socialSelectClasses}
                label="Social Media"
                className={classes.socSelect}
                value="twitter"
              />
              <FormTextInput className={classes.inputText} inputStyle={styles.input} />
            </div>
            <div className={classes.socBlock}>
              <FormSocialSelect
                classes={socialSelectClasses}
                label="Social Media"
                className={classes.socSelect}
                value="facebook"
              />
              <FormTextInput className={classes.inputText} inputStyle={styles.input} />
            </div>
            <div className={classes.socBlock}>
              <FormSocialSelect
                classes={socialSelectClasses}
                label="Social Media"
                className={classes.socSelect}
                value="youtube"
              />
              <FormTextInput className={classes.inputText} inputStyle={styles.input} />
            </div>
            <div className={classes.socBlock}>
              <FormSocialSelect
                classes={socialSelectClasses}
                label="Social Media"
                className={classes.socSelect}
                value="instagram"
              />
              <FormTextInput className={classes.inputText} inputStyle={styles.input} style={{ marginBottom: 34 }} />
            </div>
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
};

export type ProfileOrganization = Props;
export default ProfileOrganization;
