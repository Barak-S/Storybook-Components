import { makeStyles, Theme, useTheme, Paper, Divider } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { View, Title } from 'components/Common';
import React, { FC } from 'react';
import { colors, StyleProps, Styles, ms } from 'styles';
import { ScreenTitle } from 'components/Screen';
import { LineAwesomeIcon } from 'components/Icons';
import { FormSelect, FormTextInput, FormRow, FormControlSection, FormSocialsInput, FormDragnDropImage } from 'components/Form';

type Props = StyleProps;

interface CompanyType {
  value: string;
}

export const DashboardEventsProfileScreen: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const socialSelectClasses = {
    iconBtn: classes.selectAdornment,
    root: classes.selectRoot,
  };

  const locationState: CompanyType[] = [{ value: 'New York' }, { value: 'Pennsylvania' }, { value: 'New Hampshire' }];

  return (
    <>
      <ScreenTitle title="Event Profile" />
      <Paper className={classes.container} elevation={2}>
        <div className={classes.eventSetupSection}>
          <div className={classes.eventInputSection}>
            <span style={styles.title}>{'Event Information'}</span>
            <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
            <View row style={{ marginBottom: 20, marginTop: 20 }}>
              <FormTextInput className={classes.inputFull} label="Event Name" required />
            </View>
            <div className={classes.formRow} style={{ maxWidth: 572, justifyContent: 'space-between', marginBottom: 20 }}>
              <FormTextInput className={classes.inputHalf1} label="Phone Number" required />
              <FormSelect
                className={classes.formSelect}
                classes={socialSelectClasses}
                required
                // error={!!errs?.state}
                // helperText={errs?.state}
                fullWidth
                label="Country"
                keyExtractor={itm => itm.value}
                titleExtractor={itm => itm.value}
                options={locationState}
                name="companyType"
              />
            </div>
            <div className={classes.formRow} style={{ maxWidth: 572, justifyContent: 'space-between', marginBottom: 47 }}>
              <FormSelect
                className={classes.formSelect1}
                classes={socialSelectClasses}
                required
                // error={!!errs?.state}
                // helperText={errs?.state}
                fullWidth
                label="State"
                keyExtractor={itm => itm.value}
                titleExtractor={itm => itm.value}
                options={locationState}
                name="companyType"
              />
              <FormTextInput className={classes.inputHalf} label="City" required />
            </div>
          </div>
          <div className={classes.imageUploadSection}>
            <View>
              <span style={styles.title}>{'Event Logo'}</span>
              <span style={ms(styles.subtitle, { paddingBottom: 15 })}>
                {'Lorem ipsum dolor sit amet, 600 x 200px and 1MB or less'}
              </span>
              <FormDragnDropImage className={classes.uploadImg} style={styles.dragField} />
            </View>
          </div>
        </div>
        <Divider style={{ marginBottom: 36 }} />
        <span style={styles.title}>{'Website'}</span>
        <FormRow>
          <FormTextInput
            label="website"
            adornmentType="transparent"
            className={classes.inputFull}
            // value={data?.website || ''}
            // error={!!errors?.website}
            // helperText={errors?.website}
            iconStart={<LineAwesomeIcon type="globe" style={{ color: colors.greyish }} />}
            // onChange={handleTextFieldChanged('website')}
          />
        </FormRow>
        <Divider style={{ marginBottom: 36 }} />
        <span style={styles.title}>{'Contact Email'}</span>
        <FormRow style={{ marginBottom: 36 }}>
          <FormTextInput
            label="email"
            adornmentType="transparent"
            className={classes.inputFull}
            // value={data?.website || ''}
            // error={!!errors?.website}
            // helperText={errors?.website}
            iconStart={<LineAwesomeIcon type="envelope-open-text" style={{ color: colors.greyish }} />}
            // onChange={handleTextFieldChanged('website')}
          />
        </FormRow>
        <Divider style={{ marginBottom: 36 }} />
        <FormControlSection
          title="Social Media Accounts"
          description="These will display in the footer of event landing page, you can edit or add more in the event edit section."
          borderTop={false}
        >
          <FormSocialsInput items={[]} />
        </FormControlSection>
        <Divider style={{ marginTop: 40, marginBottom: 44 }} />
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
      minWidth: 455,
      [theme.breakpoints.down('md')]: {
        minWidth: '100%',
      },
    },
    inputFull: {
      maxWidth: 572,
    },
    inputHalf: {
      maxWidth: 276,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
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
    formSelect: {
      maxWidth: 276,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    formSelect1: {
      maxWidth: 276,
      marginRight: 10,
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
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
      paddingLeft: 49,
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        paddingBottom: 28,
      },
    },
    uploadImg: {
      maxHeight: 154,
      maxWidth: 631,
    },
  })();

export default DashboardEventsProfileScreen;
