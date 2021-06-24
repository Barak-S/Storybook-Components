import Divider from '@material-ui/core/Divider';
import { View } from 'components/Common';
import { FormPasswordInput } from 'components/Form';
import React, { FC, ChangeEvent, useState } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  data?: FormData;
  errs?: FormErrs;
  onChange?: (data: Partial<FormData>) => void;
}

interface FormData {
  curPass?: string;
  newPass?: string;
  confPass?: string;
}

type FormErrs = Partial<Record<keyof FormData, string>> & { form?: string };

export const ProfilePassSectionPasswordChange: FC<Props> = ({ style, data, errs, onChange }) => {
  const [passVisible, setPassVisible] = useState<boolean>(false);

  const handleTextFieldChanged = (key: keyof FormData) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (onChange) {
      onChange({ [key]: value });
    }
  };

  return (
    <View style={ms(styles.container, style)}>
      <View style={styles.headerWrap}>
        <span style={styles.title}>{'Change Your Password'}</span>
        <span style={styles.subtitle}>
          {'Password length must be minimum 8 characters, should be alphanumeric with 1 special character.'}
        </span>
      </View>
      <View style={styles.blockInf}>
        <View style={styles.oldPass}>
          <FormPasswordInput
            visible={passVisible}
            value={data?.curPass || ''}
            error={!!errs?.curPass}
            helperText={errs?.curPass}
            placeholder="Current Password"
            label="Current Password"
            inputStyle={styles.input}
            onChange={handleTextFieldChanged('curPass')}
            onChangeVisibleClick={() => setPassVisible(val => !val)}
          />
        </View>
        <View style={styles.newPass}>
          <FormPasswordInput
            visible={passVisible}
            value={data?.newPass || ''}
            error={!!errs?.newPass}
            helperText={errs?.newPass}
            placeholder="Password"
            label="Password"
            inputStyle={styles.input}
            onChange={handleTextFieldChanged('newPass')}
            onChangeVisibleClick={() => setPassVisible(val => !val)}
          />
        </View>
        <FormPasswordInput
          visible={passVisible}
          value={data?.confPass || ''}
          error={!!errs?.confPass}
          helperText={errs?.confPass}
          placeholder="Confirm Password"
          label="Confirm Password"
          inputStyle={styles.input}
          onChange={handleTextFieldChanged('confPass')}
          onChangeVisibleClick={() => setPassVisible(val => !val)}
        />
      </View>
      <Divider />
    </View>
  );
};

const styles: Styles = {
  container: {
    marginBottom: '37px',
    width: '-webkit-fill-available',
  },
  headerWrap: {
    marginBottom: '52px',
  },
  title: {
    letterSpacing: '0px',
    color: colors.IRISteal,
    display: 'block',
    paddingTop: 6,
    fontWeight: 500,
  },
  subtitle: {
    display: 'block',
    letterSpacing: '0px',
    color: colors.brownishGrey,
    paddingTop: 6,
  },
  blockInf: {
    marginBottom: '50px',
    maxWidth: '424px',
  },
  oldPass: {
    marginBottom: '50px',
  },
  newPass: {
    marginBottom: '30px',
  },
  input: {
    fontSize: 16,
  },
};

export type ProfilePassSectionPasswordChangeData = FormData;
export type ProfilePassSectionPasswordChangeErrs = FormErrs;
export type ProfilePassSectionPasswordChangeProps = Props;
export default ProfilePassSectionPasswordChange;
