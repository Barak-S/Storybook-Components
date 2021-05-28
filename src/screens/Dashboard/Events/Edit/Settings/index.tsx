import { Divider, makeStyles, Paper, Theme, useTheme, Grid } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { View } from 'components/Common';
import {
  FormControlSection,
  FormCheckboxInput,
  FormToggle,
  FormStartEndDatesInput,
  FormSelect,
  FormTextArea,
  FormTextInput,
  FormChipInput,
  FormSelectFileBtn,
} from 'components/Form';
import { ScreenTitle } from 'components/Screen';
import React, { FC } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

type Props = StyleProps;

interface CompanyType {
  value: string;
}

export const DashboardEventsSettingsScreen: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const locationState: CompanyType[] = [{ value: 'New York' }, { value: 'Pennsylvania' }, { value: 'New Hampshire' }];
  const timeZones = [
    { value: '(GMT-04:00) Eastern Standard Time' },
    { value: '(GMT-05:00) Central Standard Time' },
    { value: '(GMT-06:00) Mountain Standard Time' },
    { value: '(GMT-07:00) Pacific Standard Time' },
  ];

  return (
    <>
      <ScreenTitle title="Event Settings" />
      <Paper className={classes.container} elevation={2}>
        <span style={styles.title}>{'Event Title & Description'}</span>
        <span style={styles.subtitle}>
          {
            'The name will appear on the event tile, the description will be used in the header tag of the event web landing page.'
          }
        </span>
        <View row style={{ marginBottom: 20, marginTop: 19 }}>
          <FormTextInput className={classes.inputFull} label="Event Title" />
        </View>
        <View style={styles.textArea}>
          <FormTextArea label="Event Description" className={classes.textAreaInput} />
        </View>
        <Divider style={{ marginBottom: 26 }} />
        <span style={styles.title}>{'Event Dates'}</span>
        <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'}</span>
        <div className={classes.dateSection}>
          <div style={{ maxWidth: 408, marginRight: 30, width: '100%' }}>
            <FormStartEndDatesInput required labels={{ start: 'Start Date', end: 'End Date' }} />
          </div>
          <div className={classes.timeZone}>
            <FormSelect
              className={classes.formSelect}
              classes={socialSelectClasses}
              required
              fullWidth
              options={timeZones}
              label="Time Zone"
              keyExtractor={itm => itm.value}
              titleExtractor={itm => itm.value}
            />
          </div>
        </div>
        <Divider style={{ marginTop: 31, marginBottom: 31 }} />
        <span style={styles.title}>{'Security Level'}</span>
        <span style={styles.subtitle}>
          {'Open to the public, Public with registration, Private with registration adipiscing elitem ipsumadipiscing elitsed.'}
        </span>
        <div style={{ height: 52, marginTop: 21, marginBottom: 23, width: '100%' }}>
          <FormSelect
            className={classes.formSelect}
            classes={socialSelectClasses}
            required
            fullWidth
            options={timeZones}
            label="Registration Type"
            keyExtractor={itm => itm.value}
            titleExtractor={itm => itm.value}
          />
        </div>
        <Divider style={{ marginBottom: 28 }} />
        <span style={styles.title}>{'Multi-factor Authentication & Manual Approval'}</span>
        <span style={styles.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing elitsed.'}
        </span>
        <div className={classes.toggleSection}>
          <FormToggle title="Multi-factor Authentication" />
          <FormToggle title="Require manual approval of users who sign up" />
        </div>
        <Divider style={{ marginTop: 23, marginBottom: 28 }} />
        <span style={styles.title}>{'Email Domain Restriction'}</span>
        <Grid style={styles.checkboxGroup}>
          <Grid style={styles.checkboxHolder}>
            <FormCheckboxInput label="Have at least one letter" />
            <FormCheckboxInput label="Have at least one capital letter" />
            <FormCheckboxInput label="Have at least one number" />
          </Grid>
          <Grid style={styles.checkboxHolder}>
            <FormCheckboxInput label="Have at least one special character" />
            <FormCheckboxInput label="Not be the same as the account name" />
          </Grid>
        </Grid>
        <Divider style={{ marginTop: 22, marginBottom: 28 }} />
        <span style={styles.title}>{'Email Validation/Responce Requirements'}</span>
        <span style={styles.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscingum dolor sit ametonsectetur adipiscing elitsed.'}
        </span>
        <FormToggle title="Validation of Email Addresses Required" />
        <Divider style={{ marginTop: 20, marginBottom: 28 }} />
        <span style={styles.title}>{'Assign SEO Event Tags'}</span>
        <span style={styles.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing elitsed.'}
        </span>
        <div style={{ maxWidth: 530, marginTop: 18 }}>
          <FormChipInput items={[]} />
        </div>
        <Divider style={{ marginTop: 23, marginBottom: 23 }} />
        <FormControlSection title="CSV Document Upload" borderTop={false}>
          <Grid style={styles.uploadWrapper}>
            <Grid style={{ maxWidth: 424, width: '100%', marginRight: 16 }}>
              <FormTextInput label="Select CSV file to upload" />
            </Grid>
            <FormSelectFileBtn btnStyle={styles.uploadBtn} title="upload" />
          </Grid>
        </FormControlSection>
        <Divider style={{ marginTop: 14, marginBottom: 30 }} />
        <span style={styles.title}>{'PO/Reference Number'}</span>
        <span style={styles.subtitle}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing elitsed.'}
        </span>
        <View row style={{ marginTop: 15, maxWidth: 424, width: '100%' }}>
          <FormTextInput label="PO/Reference Number" />
        </View>
        <Divider style={{ marginTop: 48, marginBottom: 35 }} />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ContainedButton style={styles.saveBtn} size="medium">
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
      height: 97,
      maxWidth: 870,
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
  })();

export default DashboardEventsSettingsScreen;
