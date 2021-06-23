import { Grid } from '@material-ui/core';
import {
  FormControlInfo,
  FormDivider,
  FormEventTypeSelect,
  FormStartEndDatesInput,
  FormStartEndDatesInputValue,
  FormTextInput,
  FormTimeZoneInput,
} from 'components/Form';
import { EventCreate } from 'core/api';
import React, { ChangeEvent, FC } from 'react';
import { ms, StyleProps, Styles } from 'styles';
import { GenericFormData, GenericFormErrors, GenericFormProcessing, GenericFormValid } from 'utils';

import EventBasicCreateFromProfile, { EventBasicCreateFromProfileProcessing } from './scenes/Profile';
import EventBasicCreateFromSettings from './scenes/Settings';

type FormData = GenericFormData<EventCreate>;
type FormErrors = GenericFormErrors<EventCreate>;
type FormProcessing = GenericFormProcessing<Omit<EventCreate, 'profile'>> & { profile?: EventBasicCreateFromProfileProcessing };
type FormValid = GenericFormValid<EventCreate>;

interface Props extends StyleProps {
  data?: FormData;
  errors?: FormErrors;
  valid?: FormValid;
  processing?: FormProcessing;
  onNameBlur?: () => void;
  onSlugBlur?: () => void;
  onLogoFileSelect?: (file: File) => void;
  onChange?: (data: FormData) => void;
}

export const EventBasicCreateFrom: FC<Props> = ({
  style,
  data,
  errors,
  processing,
  onNameBlur,
  onSlugBlur,
  valid,
  onChange,
  onLogoFileSelect,
}) => {
  const handleDataChange = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const handleTextInputChange = <K extends keyof FormData>(key: K) => (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
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

  return (
    <Grid style={ms(styles.container, style)} container direction="column" spacing={3}>
      <Grid item>
        <FormControlInfo
          title="Basic information"
          hint="Lorem ipsum dolor sit amet."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed"
        />
      </Grid>
      <Grid item>
        <FormTextInput
          label="Name"
          required
          value={data?.name || ''}
          onBlur={onNameBlur}
          onChange={handleTextInputChange('name')}
        />
      </Grid>
      <Grid item>
        <FormEventTypeSelect
          label="Event type"
          value={data?.type}
          required
          error={!!errors?.type}
          helperText={errors?.type}
          onChange={handleDataChange('type')}
        />
      </Grid>
      <Grid item>
        <FormTextInput
          label="Domain"
          placeholder="e.g. some-cool-event"
          required
          loading={processing?.slug}
          value={data?.slug || ''}
          valid={valid?.slug}
          error={!!errors?.slug}
          helperText={errors?.slug || `This name will be used as a part of the even's page URL`}
          onBlur={onSlugBlur}
          onChange={handleTextInputChange('slug')}
        />
      </Grid>
      <Grid item>
        <FormStartEndDatesInput
          value={data && data.start && data.end ? { start: data.start, end: data.end } : undefined}
          required
          disablePast
          label={{ start: 'Start Date', end: 'End Date' }}
          onChange={handleOnStartEndChange}
        />
      </Grid>
      <Grid item>
        <FormTimeZoneInput label="Time zone" required value={data?.timezone} onChange={handleDataChange('timezone')} />
      </Grid>
      <Grid item>
        <FormDivider />
      </Grid>
      <EventBasicCreateFromProfile
        data={data?.profile}
        processing={processing?.profile}
        onLogoFileSelect={onLogoFileSelect}
        onChange={handleDataChange('profile')}
      />
      <FormDivider />
      <EventBasicCreateFromSettings data={data?.settings} onChange={handleDataChange('settings')} />
    </Grid>
  );
};

const styles: Styles = {
  container: {},
};

export type EventBasicCreateFromData = FormData;
export type EventBasicCreateFromErrors = FormErrors;
export type EventBasicCreateFromValid = FormValid;
export type EventBasicCreateFromProcessing = FormProcessing;
export type EventBasicCreateFromProps = Props;
export default EventBasicCreateFrom;
