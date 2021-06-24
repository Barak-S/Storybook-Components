import { Divider, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import {
  FormStartEndDatesInput,
  FormStartEndDatesInputValue,
  FormEventTypeSelect,
  FormTimeZoneInput,
  FormTooltip,
} from 'components/Form';
import { ScreenTitle } from 'components/Screen';
import React, { FC, useState } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import { EventUpdate, EventSettings } from 'core/api';
import { GenericFormData, isDictEmpty } from 'utils';

import EventSettingsEditFrom from './components/Form';

type FormData = GenericFormData<EventUpdate>;
type SettingsFormErrors = Partial<Record<keyof EventSettings, string>> & { request?: string };

interface Props extends StyleProps {
  data?: FormData;
  processing?: boolean;
  onChange?: (data: FormData) => void;
  onSubmit?: () => void;
}

export const DashboardEventsSettingsScreen: FC<Props> = ({ data, processing, onChange, onSubmit }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [disabled, setDisabled] = useState<boolean>(true);
  const [eventSettingErrs, setEventSettingErrs] = useState<SettingsFormErrors | undefined>();

  const handleDataChange = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    setDisabled(false);
    setEventSettingErrs(undefined);
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const handleOnStartEndChange = (val?: FormStartEndDatesInputValue) => {
    if (!onChange) return;
    setDisabled(false);
    setEventSettingErrs(undefined);
    if (val) {
      const { start, end } = val;
      onChange(data ? { ...data, start, end } : { start, end });
    } else {
      onChange(data ? { ...data, start: undefined, end: undefined } : {});
    }
  };

  const getEventSettingsFormErrs = (data: EventSettings | undefined): SettingsFormErrors | undefined => {
    const errs: SettingsFormErrors = {};
    return !isDictEmpty(errs) ? errs : undefined;
  };

  const handleSubmitClick = () => {
    const curEventSettingErrs = getEventSettingsFormErrs(data?.settings);
    if (curEventSettingErrs) {
      setEventSettingErrs(curEventSettingErrs);
      setDisabled(true);
    } else {
      onSubmit && onSubmit();
    }
  };

  return (
    <>
      <ScreenTitle title="Event Settings" />
      <Paper className={classes.container} elevation={2}>
        <EventSettingsEditFrom data={data?.settings} onChange={handleDataChange('settings')} errors={eventSettingErrs}>
          <Divider style={{ marginBottom: 26 }} />
          <div style={{ display: 'flex' }}>
            <span style={styles.title}>{'Event Dates'}</span>
            <FormTooltip
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum."
              placement="top-start"
            />
          </div>
          <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'}</span>
          <div className={classes.dateSection}>
            <div style={{ maxWidth: 408, marginRight: 30, width: '100%' }}>
              <FormStartEndDatesInput
                required
                label={{ start: 'Start Date', end: 'End Date' }}
                value={data && data.start && data.end ? { start: data.start, end: data.end } : undefined}
                onChange={handleOnStartEndChange}
              />
            </div>
            <div className={classes.timeZone}>
              <FormTimeZoneInput
                style={styles.timeZone}
                label="Time zone"
                required
                value={data?.timezone}
                onChange={handleDataChange('timezone')}
              />
            </div>
          </div>
          <Divider style={{ marginTop: 31, marginBottom: 31 }} />
          <span style={styles.title}>{'Security Level'}</span>
          <span style={styles.subtitle}>
            {'Open to the public, Public with registration, Private with registration adipiscing elitem ipsumadipiscing elitsed.'}
          </span>
          <div style={{ height: 52, marginTop: 21, marginBottom: 23, width: '100%', maxWidth: 314 }}>
            <FormEventTypeSelect label="Event type" value={data?.type} required onChange={handleDataChange('type')} />
          </div>
          <Divider style={{ marginBottom: 28 }} />
        </EventSettingsEditFrom>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ContainedButton
            style={styles.saveBtn}
            size="medium"
            processing={processing}
            disabled={disabled}
            onClick={handleSubmitClick}
          >
            {'SAVE'}
          </ContainedButton>
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
    inputFull: {
      maxWidth: 870,
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
      maxWidth: 354,
      width: '100%',
      marginTop: 'auto',
      [theme.breakpoints.down('md')]: {
        marginTop: 20,
      },
    },
  })();

export default DashboardEventsSettingsScreen;
