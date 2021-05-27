import { View } from 'components/Common';
import { FormControlSection, FormSocialsInput, FormTextInput } from 'components/Form';
import { EventProfile } from 'core/api';
import React, { ChangeEvent, FC } from 'react';
import { ms, StyleProps, Styles } from 'styles';
import { GenericFormData, GenericFormErrors, GenericFormProcessing } from 'utils';

type FormData = GenericFormData<EventProfile>;
type FormErrors = GenericFormErrors<EventProfile>;
type FormProcessing = GenericFormProcessing<EventProfile>;

interface Props extends StyleProps {
  data?: FormData;
  errors?: FormErrors;
  processing?: FormProcessing;
  onChange?: (data: FormData) => void;
}

export const EventBasicCreateFromProfile: FC<Props> = ({ style, data, onChange }) => {
  const handleTextInputChnage = <K extends keyof FormData>(key: K) => (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  const handleDataChnage = <K extends keyof FormData>(key: K) => (val: FormData[K]) => {
    onChange && onChange(data ? { ...data, [key]: val } : { [key]: val });
  };

  return (
    <FormControlSection
      style={ms(styles.container, style)}
      title="Profile"
      hint="Lorem ipsum dolor sit amet."
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed"
      borderTop={false}
    >
      <View style={styles.rowTopIndent}>
        <FormTextInput label="Country" value={data?.country || ''} onChange={handleTextInputChnage('country')} />
      </View>
      <View style={styles.rowTopIndent}>
        <FormTextInput label="State" value={data?.state || ''} onChange={handleTextInputChnage('state')} />
      </View>
      <View style={styles.rowTopIndent}>
        <FormTextInput label="City" value={data?.email || ''} onChange={handleTextInputChnage('city')} />
      </View>
      <View style={styles.rowTopIndent}>
        <FormTextInput label="Phone" value={data?.phone || ''} onChange={handleTextInputChnage('phone')} />
      </View>
      <View style={styles.rowTopIndent}>
        <FormTextInput label="Contact Email" value={data?.email || ''} onChange={handleTextInputChnage('email')} />
      </View>
      <View style={styles.rowTopIndent}>
        <FormTextInput label="Website" value={data?.website || ''} onChange={handleTextInputChnage('website')} />
      </View>
      <View style={styles.rowTopIndent}>
        <FormSocialsInput items={data?.socials} onChange={handleDataChnage('socials')} />
      </View>
    </FormControlSection>
  );
};

const styles: Styles = {
  container: {},
  rowTopIndent: {
    marginTop: 30,
  },
};

export type EventBasicCreateFromProfileProps = Props;
export default EventBasicCreateFromProfile;
