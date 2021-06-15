import { Divider, makeStyles, Theme, useTheme, Grid } from '@material-ui/core';
import { View } from 'components/Common';
import { FormToggle, FormTextInput, FormTextArea, FormTooltip } from 'components/Form';
import FormTagsInput from 'components/Form/TagsInput';
import React, { FC, ChangeEvent } from 'react';
import { colors, StyleProps, Styles } from 'styles';
import { EventSettings } from 'core/api';
import { GenericFormData } from 'utils';

import EventSettingsPassRequirements from 'components/Event/BasicCreateFrom/scenes/Settings/components/PassRequirements';
import EventSettingsEmailRestriction from 'components/Event/BasicCreateFrom/scenes/Settings/components/EmailRestriction';

type FormData = GenericFormData<EventSettings>;
type FormErrors = Partial<Record<keyof EventSettings, string>> & { request?: string };

interface Props extends StyleProps {
  data?: FormData;
  errors?: FormErrors;
  processing?: boolean;
  onChange?: (data: FormData) => void;
}

export const EventSettingsEditFrom: FC<Props> = ({ data, errors, onChange, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleDataChange = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const handleTextInputChange = <K extends keyof FormData>(key: K) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const val = e.currentTarget.value;
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <span style={styles.title}>{'Event Title & Description'}</span>
        <FormTooltip
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum."
          placement="top-start"
        />
      </div>
      <span style={styles.subtitle}>
        {'The name will appear on the event tile, the description will be used in the header tag of the event web landing page.'}
      </span>
      <View row style={{ marginBottom: 20, marginTop: 19 }}>
        <FormTextInput
          label="Event Title"
          className={classes.inputFull}
          value={data?.title || ''}
          error={!!errors?.title}
          helperText={errors?.title}
          onChange={handleTextInputChange('title')}
        />
      </View>
      <View>
        <View style={styles.textArea}>
          <FormTextArea
            resize
            label="Event Description"
            className={classes.textAreaInput}
            value={data?.description || ''}
            error={!!errors?.description}
            helperText={errors?.description}
            fontSize={21}
            onChange={handleTextInputChange('description')}
            style={{ minHeight: 76 }}
          />
        </View>
        <Divider style={styles.divider} />
      </View>

      {children}

      <span style={styles.title}>{'Multi-factor Authentication & Manual Approval'}</span>
      <span style={styles.subtitle}>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing elitsed.'}
      </span>
      <div className={classes.toggleSection}>
        <FormToggle
          title="Multi-factor Authentication"
          value={data?.multiFactorAuth || false}
          onChange={handleDataChange('multiFactorAuth')}
        />
        <FormToggle
          title="Require manual approval of users who sign up"
          value={data?.registrationManualApproval || false}
          onChange={handleDataChange('registrationManualApproval')}
        />
      </div>
      <Divider style={{ marginTop: 23, marginBottom: 16 }} />
      <div style={{ width: '100%', maxWidth: 717 }}>
        <EventSettingsEmailRestriction
          title="Email Domain Restriction"
          items={data?.allowedEmailDomains}
          onChange={handleDataChange('allowedEmailDomains')}
        />
      </div>
      <Divider style={{ marginTop: 23, marginBottom: 16 }} />
      <Grid style={styles.checkboxGroup}>
        <EventSettingsPassRequirements
          title="Password Requirements"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed."
          items={data?.passRequirements}
          onChange={handleDataChange('passRequirements')}
          style={{ width: '100%' }}
        />
      </Grid>
      <Divider style={{ marginTop: 22, marginBottom: 28 }} />
      <span style={styles.title}>{'Email Validation/Responce Requirements'}</span>
      <span style={styles.subtitle}>
        {'Lorem ipsum dolor sit amet, consectetur adipiscingum dolor sit ametonsectetur adipiscing elitsed.'}
      </span>
      <FormToggle
        title="Validation of Email Addresses Required"
        value={data?.emailValidation || false}
        onChange={handleDataChange('emailValidation')}
      />
      <Divider style={{ marginTop: 20, marginBottom: 28 }} />
      <span style={styles.title}>{'Assign SEO Event Tags'}</span>
      <span style={styles.subtitle}>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing elitsed.'}
      </span>
      <div style={{ maxWidth: 530, marginTop: 18 }}>
        <FormTagsInput items={data?.seoTags} label="Add Tags" onChange={handleDataChange('seoTags')} />
      </div>
      <Divider style={{ marginTop: 23, marginBottom: 23 }} />
      <span style={styles.title}>{'PO/Reference Number'}</span>
      <span style={styles.subtitle}>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing elitsed.'}
      </span>
      <View row style={{ marginTop: 15, maxWidth: 424, width: '100%' }}>
        <FormTextInput
          label="PO/Reference Number"
          value={data?.purchaseOrderNumber || ''}
          error={!!errors?.purchaseOrderNumber}
          helperText={errors?.purchaseOrderNumber}
          onChange={handleTextInputChange('purchaseOrderNumber')}
        />
      </View>
      <Divider style={{ marginTop: 48, marginBottom: 35 }} />
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
  textArea: {
    marginBottom: 37,
  },
  checkboxGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxWidth: 660,
    width: '100%',
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
    textAreaInput: {
      maxWidth: 870,
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

export default EventSettingsEditFrom;
