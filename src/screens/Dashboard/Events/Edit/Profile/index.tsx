import { Hidden, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import { ContainedButton } from 'components/Buttons';
import { View } from 'components/Common';
import { FormDragnDropImage, FormTextInput } from 'components/Form';
import { ScreenTitle } from 'components/Screen';
import React, { ChangeEvent, FC, useState } from 'react';
import { colors, ms, StyleProps, Styles, withDensity } from 'styles';
import { EventProfile, EventUpdate } from 'core/api';
import { GenericFormData, isDictEmpty, validators } from 'utils';
import EventProfileEditFrom from './components/Form';

import { modCloudinaryUrl } from 'core/cloudinary';
import { Log } from 'core';
const log = Log('screens.Dashboard.events.edit.profile');
import { useStoreManager } from 'store';
import { useSnackbar } from 'components/Feedback';

type FormData = GenericFormData<EventUpdate>;
type FormErrors = Partial<Record<keyof FormData, string>> & { request?: string };
type ProfileFormErrors = Partial<Record<keyof EventProfile, string>> & { request?: string };

interface Props extends StyleProps {
  data: FormData;
  processing?: boolean;
  onChange?: (data: FormData) => void;
  onSubmit?: () => void;
}

export const DashboardEventsProfileScreen: FC<Props> = ({ data, processing, onChange, onSubmit }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const manager = useStoreManager();
  const { showSnackbar } = useSnackbar();

  const [disabled, setDisabled] = useState<boolean>(true);
  const [eventErrs, setEventErrs] = useState<FormErrors | undefined>();
  const [eventProfileErrs, setEventProfileErrs] = useState<FormErrors | undefined>();
  const [imgProcessing, setImgProcessing] = useState<boolean>(false);

  const handleTextInputChange = <K extends keyof FormData>(key: K) => (e: ChangeEvent<HTMLInputElement>) => {
    setEventErrs(undefined);
    setEventProfileErrs(undefined);
    setDisabled(false);
    const val = e.currentTarget.value;
    onChange && onChange({ ...data, [key]: val });
  };

  const handleDataChange = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    setEventErrs(undefined);
    setEventProfileErrs(undefined);
    setDisabled(false);
    onChange && onChange({ ...data, [key]: val });
  };

  const getEventFormErrs = (data: FormData): FormErrors | undefined => {
    const errs: FormErrors = {
      name: !data.name || data.name === '' ? 'An Event Name is required' : undefined,
    };
    return !isDictEmpty(errs) ? errs : undefined;
  };
  const getEventProfileFormErrs = (data: EventProfile | undefined): ProfileFormErrors | undefined => {
    const errs: ProfileFormErrors = {
      country: !data?.country || data.country === '' ? 'A valid Country is required' : undefined,
      state: !data?.state || data.state === '' ? 'A valid State is required' : undefined,
      city: !data?.city || data.city === '' ? 'A valid City is required' : undefined,
      phone: validators.getPhoneNumberErr(data?.phone, { required: true, requiredMsg: 'A phone number is required' }),
    };
    return !isDictEmpty(errs) ? errs : undefined;
  };

  const handleLogoFileSelect = async (file: File) => {
    try {
      setDisabled(false);
      log.info('uploading logo');
      setImgProcessing(true);
      const { data: imgData } = await manager.api.assets.uploadImage(file);
      setImgProcessing(false);
      log.info('uploading logo done');
      const profile = data.profile ? { ...data.profile, logo: imgData.url } : { logo: imgData.url };
      onChange && onChange({ ...data, profile });
    } catch (err: unknown) {
      setImgProcessing(false);
      log.err('uploading logo err=', err);
      showSnackbar('Uploading logo error', 'error');
    }
  };

  const handleSubmitClick = () => {
    const curEventErrs = getEventFormErrs(data);
    const curEventProfileErrs = getEventProfileFormErrs(data.profile);
    if (curEventErrs || curEventProfileErrs) {
      setEventErrs(curEventErrs);
      setEventProfileErrs(curEventProfileErrs);
      setDisabled(true);
    } else {
      onSubmit && onSubmit();
    }
  };

  return (
    <>
      <ScreenTitle title="Event Profile" />
      <Paper className={classes.container} elevation={2}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className={classes.eventInputSection}>
            <span style={styles.title}>{'Event Information'}</span>
            <span style={styles.subtitle}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.'}</span>
            <View row className={classes.eventNameInput}>
              <FormTextInput
                className={classes.inputFull}
                label="Event Name"
                name="name"
                required
                error={!!eventErrs?.name}
                helperText={eventErrs?.name}
                value={data.name || ''}
                onChange={handleTextInputChange('name')}
              />
            </View>
            <EventProfileEditFrom
              data={data.profile}
              errors={eventProfileErrs}
              onChange={handleDataChange('profile')}
              onLogoFileSelect={handleLogoFileSelect}
            />
          </div>
          <div className={classes.eventLogoSection}>
            <Hidden mdDown>
              <div className={classes.imageUploadSection}>
                <View>
                  <span style={styles.title}>{'Event Logo'}</span>
                  <span style={ms(styles.subtitle, { paddingBottom: 15 })}>
                    {'Lorem ipsum dolor sit amet, 600 x 200px and 1MB or less'}
                  </span>
                  <FormDragnDropImage
                    className={classes.uploadImg}
                    style={styles.dragField}
                    src={
                      data.profile?.logo
                        ? modCloudinaryUrl(data.profile.logo, { transform: { width: withDensity(535), crop: 'fill' } })
                        : undefined
                    }
                    processing={imgProcessing}
                    onFileSelect={handleLogoFileSelect}
                  />
                </View>
              </div>
            </Hidden>
          </div>
        </div>
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
    inputFull: {
      maxWidth: 572,
    },
    imageUploadSection: {
      width: '100%',
      maxWidth: 535,
      paddingLeft: 18,
      [theme.breakpoints.down('md')]: {
        paddingBottom: 28,
      },
    },
    uploadImg: {
      maxHeight: 154,
      maxWidth: 631,
    },
    eventNameInput: {
      marginBottom: 20,
      marginTop: 20,
      maxWidth: '50%',
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
      },
    },
    eventInputSection: {
      width: '100%',
    },
    eventLogoSection: {
      position: 'absolute',
      top: 37,
      right: 35,
      width: 'calc(50% - 35px)',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  })();

export default DashboardEventsProfileScreen;
