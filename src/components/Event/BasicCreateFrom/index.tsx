import { View } from 'components/Common';
import {
  FormControlSection,
  FormEventTypeSelect,
  FormStartEndDatesInput,
  FormStartEndDatesInputValue,
  FormTextInput,
  FormTimeZoneInput,
} from 'components/Form';
import { EventCreate } from 'core/api';
import React, { ChangeEvent, FC } from 'react';
import { StyleProps, Styles } from 'styles';
import { GenericFormData, GenericFormErrors } from 'utils';

import EventBasicCreateFromProfile, { EventBasicCreateFromProfileProcessing } from './scenes/Profile';
import EventBasicCreateFromSettings from './scenes/Settings';

type FormData = GenericFormData<EventCreate>;
type FormErrors = GenericFormErrors<EventCreate>;
type FormProcessing = { profile?: EventBasicCreateFromProfileProcessing };

interface Props extends StyleProps {
  data?: FormData;
  errors?: FormErrors;
  processing?: FormProcessing;
  onLogoFileSelect?: (file: File) => void;
  onChange?: (data: FormData) => void;
}

export const EventBasicCreateFrom: FC<Props> = ({ style, data, errors, processing, onChange, onLogoFileSelect }) => {
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
    <View style={[styles.container, style]}>
      <FormControlSection
        title="Basic information"
        hint="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed"
        borderTop={false}
      >
        <View style={styles.rowTopIndent}>
          <FormTextInput
            style={styles.headLineField}
            label="Name"
            required
            value={data?.name || ''}
            onChange={handleTextInputChange('name')}
          />
        </View>
        <View style={styles.rowTopIndent}>
          <FormEventTypeSelect
            label="Event type"
            value={data?.type}
            required
            error={!!errors?.type}
            helperText={errors?.type}
            onChange={handleDataChange('type')}
          />
        </View>
        <FormStartEndDatesInput
          value={data && data.start && data.end ? { start: data.start, end: data.end } : undefined}
          style={styles.rowTopIndent}
          required
          disablePast
          label={{ start: 'Start Date', end: 'End Date' }}
          onChange={handleOnStartEndChange}
        />
        <FormTimeZoneInput
          style={styles.timeZone}
          label="Time zone"
          required
          value={data?.timezone}
          onChange={handleDataChange('timezone')}
        />
      </FormControlSection>
      <EventBasicCreateFromProfile
        data={data?.profile}
        processing={processing?.profile}
        onLogoFileSelect={onLogoFileSelect}
        onChange={handleDataChange('profile')}
      />
      <EventBasicCreateFromSettings data={data?.settings} onChange={handleDataChange('settings')} />
    </View>
  );
};

const styles: Styles = {
  container: {},
  rowTopIndent: {
    marginTop: 5,
  },
  timeZone: {
    marginTop: 30,
  },
  headLineField: {
    marginBottom: 30,
  },
};

export type EventBasicCreateFromData = FormData;
export type EventBasicCreateFromErrors = FormErrors;
export type EventBasicCreateFromProcessing = FormProcessing;
export type EventBasicCreateFromProps = Props;
export default EventBasicCreateFrom;
