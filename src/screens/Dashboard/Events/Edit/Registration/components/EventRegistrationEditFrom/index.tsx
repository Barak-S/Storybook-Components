import { Divider, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { ContainedButton, SocialButton } from 'components/Buttons';
import { View } from 'components/Common';
import {
  FormToggle,
  FormStartEndDatesInput,
  FormStartEndDatesInputValue,
  FormSelect,
  FormTextArea,
  FormTextInput,
  FormTimeZoneInput,
  FormTextEditor,
  FormTooltip,
} from 'components/Form';
import React, { FC, useEffect, ChangeEvent } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';
import { GenericFormData } from 'utils';
import {
  EventUpdate,
  EventRegistrationType,
  EventRegistration,
  EventRegistrationUpdate,
  EventRegistrationFormField,
} from 'core/api';
import RegistrationFormFields from '../EventRegistrationFormFields';

type FormData = any;
// type FormErrors = Partial<Record<keyof EventUpdate, string>> & { request?: string };

interface Props extends StyleProps {
  data?: FormData;
  processing?: boolean;
  onChange?: (data: FormData) => void;
}

interface EventType {
  label: string;
  value: EventRegistrationType;
}
interface RegistrationFormType {
  value: string;
}

export const EventRegistrationEditFrom: FC<Props> = ({ data, onChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleDataChange = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const handleRegistrationTypeChange = (key: keyof FormData) => (val: EventType) => {
    onChange && onChange({ ...data, [key]: val.value });
  };

  const handleOnStartEndChange = (val?: FormStartEndDatesInputValue) => {
    if (!onChange) return;
    if (val) {
      const { start, end } = val;
      onChange(data ? { ...data, start, end } : { start, end });
    } else {
      onChange(data ? { ...data, start: undefined, end: undefined } : {});
    }
  };

  const handleTextInputChange = <K extends keyof FormData>(key: K) => (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const eventType: EventType[] = [
    { label: 'Free Event', value: 'free' },
    { label: 'Fixed Price', value: 'fixed-price' },
    { label: '​​Tiered Pricing', value: 'tiered-pricing' },
  ];
  const formFieldType: RegistrationFormType[] = [
    { value: 'Email' },
    { value: 'First Name' },
    { value: '​​Last Name' },
    { value: '​​First and Last Name' },
    { value: '​​Off' },
  ];

  return (
    <>
      <div style={{ display: 'flex' }}>
        <span style={styles.title}>{'Registration Type'}</span>
        <FormTooltip
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum."
          placement="top-start"
        />
      </div>
      <span style={styles.subtitle}>{'We will need the registration types for this lorem ipsum adipiscing elitsed.'}</span>
      <View row style={{ marginBottom: 20, marginTop: 19 }}>
        <FormSelect
          className={classes.formSelect}
          classes={socialSelectClasses}
          required
          fullWidth
          value={data?.type ? eventType.find(itm => itm.value === data?.type) : undefined}
          options={eventType}
          label="Select Type"
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.label}
          onChange={handleRegistrationTypeChange('type')}
        />
      </View>
      <Divider style={{ marginTop: 9, marginBottom: 38 }} />
      <div style={{ display: 'flex' }}>
        <span style={styles.title}>{'Registration Open Dates'}</span>
        <FormTooltip
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum."
          placement="top-start"
        />
      </div>
      <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'}</span>
      <div style={{ maxWidth: 408, marginRight: 30, width: '100%' }}>
        <FormStartEndDatesInput
          required
          label={{ start: 'Start Date', end: 'End Date' }}
          value={data && data.start && data.end ? { start: data.start, end: data.end } : undefined}
          onChange={handleOnStartEndChange}
        />
      </div>
      <div className={classes.timeSection}>
        <div style={{ display: 'flex' }}>
          <FormTextInput className={classes.timeInput} fullWidth label="Start Time" value="" />
          <div style={{ width: 49, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={styles.timeTo}>{'to'}</span>
          </div>
          <FormTextInput className={classes.timeInput} fullWidth label="End Time" value="" />
        </div>
        <div className={classes.timeZone}>
          <FormTimeZoneInput style={styles.timeZone} label="Time zone" required />
        </div>
      </div>
      <Divider style={{ marginBottom: 28 }} />
      <div style={{ display: 'flex' }}>
        <span style={styles.title}>{'Registration Description'}</span>
        <FormTooltip
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum."
          placement="top-start"
        />
      </div>
      <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet consectetur adipiscing elitsed.'}</span>
      <div style={{ marginTop: 22, marginBottom: 41, maxWidth: 1120, width: '100%' }}>
        <FormTextEditor value={data?.description || ''} onChange={handleDataChange('description')} style={{ height: 255 }} />
      </div>
      <Divider style={{ marginBottom: 44 }} />

      <RegistrationFormFields data={data?.form} onChange={handleDataChange('form')} />

      <div style={{ display: 'flex' }}>
        <span style={styles.title}>{'Social Registration Integration'}</span>
        <FormTooltip
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum."
          placement="top-start"
        />
      </div>
      <span style={styles.subtitle}>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor s, consectetur adipiscing elitsed.'}
      </span>
      <div className={classes.socialToggleSection}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FormToggle style={{ marginRight: 15 }} />
          <SocialButton style={styles.socialBtn} type="facebook" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FormToggle style={{ marginRight: 15 }} />
          <SocialButton style={styles.socialBtn} type="google" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FormToggle style={{ marginRight: 15 }} />
          <SocialButton style={styles.socialBtn} type="linkedin" disabled />
        </div>
      </div>
      <Divider style={{ marginBottom: 41 }} />
      <span style={styles.title}>{'Terms and Conditions'}</span>
      <div style={{ maxWidth: 580, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <span style={styles.subtitle}>{'Do you want your attendees to agree to Terms and Conditions?'}</span>
        <div style={{ height: 32, display: 'flex', alignItems: 'center' }}>
          <FormToggle title="Yes" />
        </div>
      </div>
      <div style={{ marginBottom: 41, maxWidth: 1120, width: '100%' }}>
        <FormTextEditor
          value={data?.termsAndConditions || ''}
          onChange={handleDataChange('termsAndConditions')}
          style={{ height: 255 }}
        />
      </div>
      <Divider style={{ marginBottom: 41 }} />
      <span style={styles.title}>{'Marketing Statement'}</span>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 755 }}>
        <span style={styles.subtitle}>
          {'Do you want your attendees to agree to accept marketing materials from your organization'}
        </span>
        <div style={{ height: 32, display: 'flex', alignItems: 'center' }}>
          <FormToggle title="Yes" />
        </div>
      </div>
      <View style={{ marginTop: 18, marginBottom: 23 }}>
        <FormTextArea
          label="Marketing Statement"
          className={classes.textAreaInput}
          value="I agree to receive product updates and marketing communications from…."
          resize
          fontSize={21}
          style={{ minHeight: 90 }}
        />
      </View>
      <div className={classes.defaultSetting}>
        <span style={{ fontSize: 14, color: colors.IRISteal }}>{'Default Setting'}</span>
        <FormToggle title="Agree" />
      </div>
    </>
  );
};

const styles: Styles = {
  title: {
    letterSpacing: '0px',
    color: colors.IRISteal,
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
    padding: 0,
    marginBottom: 36,
  },
  textArea: {
    marginBottom: 37,
  },
  checkboxGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxWidth: 630,
  },
  checkboxHolder: {
    display: 'flex',
    flexDirection: 'column',
  },
  uploadWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  uploadBtn: {
    height: 52,
    width: 132,
  },
  socialBtn: {
    maxWidth: 153,
  },
  timeTo: {
    fontSize: 16,
    color: colors.coolGrey,
  },
  formButton: {
    height: 52,
    padding: 0,
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
      minWidth: 455,
      [theme.breakpoints.down('md')]: {
        minWidth: '100%',
      },
    },
    inputFull: {
      maxWidth: 870,
    },
    textAreaInput: {
      maxWidth: 871,
    },
    selectAdornment: {
      '&.MuiButtonBase-root': {
        color: colors.brownishGrey,
        background: colors.veryLightPinkThree,
      },
    },
    selectRoot: {
      fontSize: 16,
      textTransform: 'capitalize',
    },
    formSelect: {
      maxWidth: 354,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    dateSection: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    timeZone: {
      height: 52,
      marginTop: 'auto',
      marginLeft: 25,
      maxWidth: 354,
      width: '100%',
      [theme.breakpoints.down('md')]: {
        marginTop: 20,
      },
    },
    toggleSection: {
      display: 'flex',
      flexDirection: 'row',
      maxWidth: 683,
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    timeSection: {
      marginTop: 70,
      marginBottom: 35,
      display: 'flex',
    },
    timeInput: {
      maxWidth: 232,
    },
    socialToggleSection: {
      display: 'flex',
      maxWidth: 679,
      justifyContent: 'space-between',
      marginBottom: 41,
      marginTop: 30,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    defaultSetting: {
      height: 45,
      display: 'flex',
      flexDirection: 'column',
    },
    formButtonSection: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 37,
    },
    buttonContainer: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 122,
        justifyContent: 'space-between',
      },
    },
  })();

export default EventRegistrationEditFrom;
