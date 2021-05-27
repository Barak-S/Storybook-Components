import { View } from 'components/Common';
import {
  FormControlSection,
  FormEventTypeSelect,
  FormStartEndDatesInput,
  FormStartEndDatesInputValue,
  FormTextInput,
} from 'components/Form';
import { EventCreate } from 'core/api';
import React, { ChangeEvent, FC } from 'react';
import { StyleProps, Styles } from 'styles';
import { GenericFormData, GenericFormErrors, GenericFormProcessing } from 'utils';

import EventBasicCreateFromProfile from './scenes/Profile';

type FormData = GenericFormData<EventCreate>;
type FormErrors = GenericFormErrors<EventCreate>;
type FormProcessing = GenericFormProcessing<EventCreate>;

interface Props extends StyleProps {
  data?: FormData;
  errors?: FormErrors;
  processing?: FormProcessing;
  onChange?: (data: FormData) => void;
}

export const EventBasicCreateFrom: FC<Props> = ({ style, data, errors, onChange }) => {
  const handleDataChnage = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const handleTextInputChnage = <K extends keyof FormData>(key: K) => (e: ChangeEvent<HTMLInputElement>) => {
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
            onChange={handleTextInputChnage('name')}
          />
        </View>
        <View style={styles.rowTopIndent}>
          <FormEventTypeSelect
            label="Event type"
            value={data?.type}
            required
            error={!!errors?.type}
            helperText={errors?.type}
            onChange={handleDataChnage('type')}
          />
        </View>
        <FormStartEndDatesInput
          value={data && data.start && data.end ? { start: data.start, end: data.end } : undefined}
          style={styles.rowTopIndent}
          required
          labels={{ start: 'Start Date', end: 'End Date' }}
          onChange={handleOnStartEndChange}
        />
      </FormControlSection>
      <EventBasicCreateFromProfile data={data?.profile} onChange={handleDataChnage('profile')} />
      {/* <FormControlSection 
      title="Assign SEO Event Tags" description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.">
        <Grid style={styles.tagsFieldWrapper}>
          <FormChipInput items={[]} label="Add Tags" />
        </Grid>
      </FormControlSection> */}
      {/* <FormControlSection 
      title="CSV Document Upload" description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.">
        <Grid style={styles.uploadWrapper}>
          <Grid style={styles.csvFieldWrapper}>
            <FormTextInput label="Select CSV file to upload" />
          </Grid>
          <SelectFileBtn
            btnStyle={styles.uploadBtn}
            title="upload"
            //   onFileSelect={() => { }}
          />
        </Grid>
      </FormControlSection> */}
      {/* <FormControlSection 
      title="PO/Reference Number" description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed.">
        <Grid style={styles.poFieldWrapper}>
          <FormTextInput label="PO/Reference Number" />
        </Grid>
      </FormControlSection> */}
    </View>
  );
};

const styles: Styles = {
  container: {},
  rowTopIndent: {
    marginTop: 5,
  },
  headLineField: {
    marginBottom: 30,
  },
};

export type EventBasicCreateFromData = FormData;
export type EventBasicCreateFromErrors = FormErrors;
export type EventBasicCreateFromProcessing = FormProcessing;
export default EventBasicCreateFrom;
