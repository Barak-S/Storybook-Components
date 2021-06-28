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

type FormData = any;

interface Props extends StyleProps {
  data?: FormData;
  processing?: boolean;
  onChange?: (data: FormData) => void;
}

interface RegistrationFormType {
  label: string;
  value: EventRegistrationFormField;
}

export const RegistrationFormFields: FC<Props> = ({ data, onChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleFormFieldChange = (key: number) => (val: RegistrationFormType) => {
    const fieldsArray: EventRegistrationFormField[] = data?.fields || [];
    fieldsArray[key] ? (fieldsArray[key] = val.value) : fieldsArray.push(val.value);
    onChange && onChange(data ? { ...data, ['fields']: fieldsArray } : { ['fields']: fieldsArray });
  };

  const handleTextInputChange = <K extends keyof FormData>(key: K) => (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const formFieldType: RegistrationFormType[] = [
    { label: 'Email', value: 'email' },
    { label: 'First Name', value: 'firstName' },
    { label: '​​Last Name', value: 'lastName' },
    { label: '​​Password', value: 'password' },
  ];

  return (
    <>
      <div style={{ display: 'flex' }}>
        <span style={styles.title}>{'Registration Form Headline & Subhead'}</span>
        <FormTooltip title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum." />
      </div>
      <span style={styles.subtitle}>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor s, consectetur adipiscing elitsed.'}
      </span>
      <div style={{ maxWidth: 870, display: 'flex', marginTop: 53 }}>
        <FormTextInput
          className={classes.inputFull}
          fullWidth
          label="Headline"
          value={data?.headline || undefined}
          onChange={handleTextInputChange('headline')}
        />
      </div>
      <div style={{ maxWidth: 870, display: 'flex', marginTop: 53, marginBottom: 41 }}>
        <FormTextInput
          className={classes.inputFull}
          fullWidth
          label="Subhead"
          value={data?.subhead || undefined}
          onChange={handleTextInputChange('subhead')}
        />
      </div>
      <Divider style={{ marginBottom: 43 }} />
      <div style={{ display: 'flex' }}>
        <span style={styles.title}>{'Registration Form Fields'}</span>
        <FormTooltip
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum."
          placement="top-start"
        />
      </div>
      <span style={styles.subtitle}>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed. Lorem ipsum dolor s, consectetur adipiscing elitsed.'}
      </span>
      <div style={{ maxWidth: 259, width: '100%', marginTop: 60, marginBottom: 44 }}>
        <FormSelect
          className={classes.formSelect}
          classes={socialSelectClasses}
          label="Field 1"
          options={formFieldType}
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.label}
          value={
            data?.fields && typeof data?.fields[0] !== 'undefined'
              ? formFieldType.find(itm => itm.value === data?.fields[0])
              : undefined
          }
          onChange={handleFormFieldChange(0)}
        />
      </div>
      <div style={{ maxWidth: 259, width: '100%', marginBottom: 44 }}>
        <FormSelect
          className={classes.formSelect}
          classes={socialSelectClasses}
          label="Field 2"
          options={formFieldType}
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.label}
          value={
            data?.fields && typeof data?.fields[1] !== 'undefined'
              ? formFieldType.find(itm => itm.value === data?.fields[1])
              : undefined
          }
          onChange={handleFormFieldChange(1)}
        />
      </div>
      <div style={{ maxWidth: 259, width: '100%', marginBottom: 44 }}>
        <FormSelect
          className={classes.formSelect}
          classes={socialSelectClasses}
          label="Field 3"
          options={formFieldType}
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.label}
          value={
            data?.fields && typeof data?.fields[2] !== 'undefined'
              ? formFieldType.find(itm => itm.value === data?.fields[2])
              : undefined
          }
          onChange={handleFormFieldChange(2)}
        />
      </div>
      <div style={{ maxWidth: 259, width: '100%', marginBottom: 41 }}>
        <FormSelect
          className={classes.formSelect}
          classes={socialSelectClasses}
          label="Field 4"
          options={formFieldType}
          keyExtractor={itm => itm.value}
          titleExtractor={itm => itm.label}
          value={
            data?.fields && typeof data?.fields[3] !== 'undefined'
              ? formFieldType.find(itm => itm.value === data?.fields[3])
              : undefined
          }
          onChange={handleFormFieldChange(3)}
        />
      </div>
      <Divider style={{ marginBottom: 42 }} />
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

export default RegistrationFormFields;
