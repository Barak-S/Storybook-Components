import { Divider, makeStyles, Theme, useTheme, Hidden } from '@material-ui/core';
import {
  FormControlSection,
  FormDragnDropImage,
  FormRow,
  FormSocialsInput,
  FormTextInput,
  FormCountryInput,
} from 'components/Form';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, ChangeEvent } from 'react';
import { View } from 'components/Common';
import { colors, StyleProps, Styles, ms } from 'styles';
import { EventProfile } from 'core/api';
import { GenericFormData } from 'utils';

type FormData = GenericFormData<EventProfile>;
type ProfileFormErrors = Partial<Record<keyof EventProfile, string>> & { request?: string };

interface Props extends StyleProps {
  data?: FormData;
  errors?: ProfileFormErrors;
  onChange?: (data: FormData) => void;
}

export const EventProfileEditFrom: FC<Props> = ({ data, errors, onChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleTextInputChange = <K extends keyof FormData>(key: K) => (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const handleDataChange = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  return (
    <>
      <div className={classes.eventSetupSection}>
        <div className={classes.eventInputSection}>
          <div className={classes.formRow} style={{ maxWidth: 572, justifyContent: 'space-between', marginBottom: 20 }}>
            <FormTextInput
              className={classes.inputHalf1}
              label="Phone Number"
              name="phone"
              required
              error={!!errors?.phone}
              helperText={errors?.phone}
              value={data?.phone || ''}
              onChange={handleTextInputChange('phone')}
            />
            <div className={classes.countryInput}>
              <FormCountryInput required label="Country" value={data?.country || ''} onChange={handleDataChange('country')} />
            </div>
          </div>
          <div className={classes.formRow} style={{ maxWidth: 572, justifyContent: 'space-between', marginBottom: 47 }}>
            <FormTextInput
              className={classes.inputHalf1}
              label="State"
              name="state"
              required
              error={!!errors?.state}
              helperText={errors?.state}
              value={data?.state || ''}
              onChange={handleTextInputChange('state')}
            />
            <FormTextInput
              className={classes.inputHalf}
              label="City"
              name="city"
              required
              error={!!errors?.city}
              helperText={errors?.city}
              value={data?.city || ''}
              onChange={handleTextInputChange('city')}
            />
          </div>
        </div>
        <Hidden lgUp>
          <div className={classes.imageUploadSection}>
            <View>
              <span style={styles.title}>{'Event Logo'}</span>
              <span style={ms(styles.subtitle, { paddingBottom: 15 })}>
                {'Lorem ipsum dolor sit amet, 600 x 200px and 1MB or less'}
              </span>
              <FormDragnDropImage className={classes.uploadImg} style={styles.dragField} />
            </View>
          </div>
        </Hidden>
      </div>
      <Divider style={{ marginBottom: 36 }} />
      <span style={styles.title}>{'Website'}</span>
      <FormRow>
        <FormTextInput
          label="website"
          adornmentType="transparent"
          className={classes.inputFull}
          iconStart={<LineAwesomeIcon type="globe" style={{ color: colors.greyish }} />}
          onChange={handleTextInputChange('website')}
        />
      </FormRow>
      <Divider style={{ marginBottom: 36 }} />
      <span style={styles.title}>{'Contact Email'}</span>
      <FormRow style={{ marginBottom: 36 }}>
        <FormTextInput
          label="email"
          adornmentType="transparent"
          className={classes.emailInput}
          value={data?.email || ''}
          disabled
          iconStart={<LineAwesomeIcon type="envelope-open-text" style={{ color: colors.greyish }} />}
          onChange={handleTextInputChange('email')}
        />
      </FormRow>
      <Divider style={{ marginBottom: 36 }} />
      <div style={{ width: '100%', maxWidth: 750 }}>
        <FormControlSection
          title="Social Media Accounts"
          description="These will display in the footer of event landing page, you can edit or add more in the event edit section."
          borderTop={false}
        >
          <FormSocialsInput items={data?.socials} onChange={handleDataChange('socials')} />
        </FormControlSection>
      </div>
      <Divider style={{ marginTop: 40, marginBottom: 44 }} />
    </>
  );
};

const styles: Styles = {
  title: {
    letterSpacing: '0px',
    color: colors.marine,
    display: 'block',
    paddingBottom: 7,
    fontWeight: 500,
    fontSize: 16,
  },
  subtitle: {
    display: 'block',
    letterSpacing: '0px',
    color: colors.brownishGrey,
    fontSize: 16,
  },
  saveBtn: {
    width: 187,
    height: 52,
    letterSpacing: 2.25,
    fontSize: 13,
    marginTop: 10,
    padding: 0,
    marginBottom: 50,
  },
};

const useStyles = (theme: Theme) =>
  makeStyles({
    container: {
      borderRadius: 30,
      maxWidth: 1380,
      width: '100%',
      alignItems: 'center',
      position: 'relative',
      boxShadow: '0px 0px 30px #AAAAAA41',
      paddingTop: 37,
      paddingLeft: 34,
      paddingRight: 35,
    },
    eventInputSection: {
      width: '50%',
      [theme.breakpoints.down('md')]: {
        minWidth: '100%',
      },
    },
    inputFull: {
      maxWidth: 572,
      '& > label': {
        '&[class*="-shrink"]:not([class*="-focused"])': {
          display: 'initial',
        },
        '&[class*="-shrink"]': {
          display: 'none',
        },
        '&[class*="-shrink"][class*="-filled"]': {
          display: 'none',
        },
      },
    },
    emailInput: {
      maxWidth: 572,
      '& > label': {
        '&[class*="-shrink"]': {
          display: 'none',
        },
      },
    },
    countryInput: {
      maxWidth: 276,
      width: '100%',
      marginBottom: 'auto',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        marginBottom: 0,
      },
    },
    inputHalf: {
      maxWidth: 276,
      marginBottom: 'auto',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        marginBottom: 0,
      },
    },
    inputHalf1: {
      maxWidth: 276,
      marginRight: 10,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
    eventSetupSection: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    formRow: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        height: 124,
      },
    },
    imageUploadSection: {
      width: '100%',
      maxWidth: 535,
      marginTop: -138,
      [theme.breakpoints.down('md')]: {
        marginTop: 0,
        paddingBottom: 28,
      },
    },
    uploadImg: {
      maxHeight: 154,
      maxWidth: 631,
    },
  })();

export default EventProfileEditFrom;
