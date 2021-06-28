import { Divider, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { ContainedButton, SocialButton } from 'components/Buttons';
import { View } from 'components/Common';
import {
  FormToggle,
  FormStartEndDatesInput,
  FormSelect,
  FormTextArea,
  FormTextInput,
  FormTimeZoneInput,
  FormTextEditor,
  FormTooltip,
} from 'components/Form';
import { ScreenTitle } from 'components/Screen';
import React, { FC, useState } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';
import { GenericFormData } from 'utils';
import {
  EventUpdate,
  EventRegistrationType,
  EventRegistration,
  EventRegistrationUpdate,
  EventRegistrationFormField,
} from 'core/api';
import EventRegistrationEditFrom from './components/EventRegistrationEditFrom';

type FormData = GenericFormData<EventUpdate>;
// type FormErrors = Partial<Record<keyof EventUpdate, string>> & { request?: string };

interface Props extends StyleProps {
  data?: FormData;
  processing?: boolean;
  onChange?: (data: FormData) => void;
  onSubmit?: () => void;
}

export const DashboardEventsRegistrationScreen: FC<Props> = ({ data, processing, onChange, onSubmit }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [disabled, setDisabled] = useState<boolean>(true);

  // const handleDataChange = <K extends keyof FormData>(key: K) => (val?: FormData[K]) => {
  //   //onChange && onChange({ ...data, [key]: val });
  //   onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  // };

  const handleDataChange = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const handleSubmitClick = () => {
    onSubmit && onSubmit();
  };

  return (
    <>
      <ScreenTitle title="Event Registration" />
      <Paper className={classes.container} elevation={2}>
        <EventRegistrationEditFrom data={data?.registration} onChange={handleDataChange('registration')} />
        <Divider style={{ marginTop: 29, marginBottom: 41 }} />
        <div className={classes.formButtonSection}>
          <div className={classes.buttonContainer}>
            <ContainedButton
              processing={processing}
              // disabled={disabled}
              onClick={handleSubmitClick}
              style={ms(styles.formButton, { width: 187, marginRight: 22 })}
              size="large"
              endIcon="arrow-right"
            >
              {'SAVE'}
            </ContainedButton>
            <ContainedButton style={ms(styles.formButton, { width: 313 })} size="large" endIcon="arrow-right">
              {'Save & Edit Appearance'}
            </ContainedButton>
          </div>
        </div>
      </Paper>
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

export default DashboardEventsRegistrationScreen;
