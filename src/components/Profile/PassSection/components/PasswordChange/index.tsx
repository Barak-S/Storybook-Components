import Divider from '@material-ui/core/Divider';
import { View } from 'components/Common';
import { FormPasswordInput } from 'components/Form';
import React, { FC } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const ProfilePassSectionPasswordChange: FC<Props> = ({ style }) => {
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
          <FormPasswordInput visible placeholder="Current Password" inputStyle={styles.input} />
        </View>
        <View style={styles.newPass}>
          <FormPasswordInput visible placeholder="Password" inputStyle={styles.input} />
        </View>
        <FormPasswordInput visible placeholder="Confirm Password" inputStyle={styles.input} />
      </View>
      <Divider />
    </View>
  );
};

const styles: Styles = {
  container: {
    marginBottom: '37px',
    width: '-webkit-fill-available',
    padding: '0px 8px',
  },
  headerWrap: {
    marginBottom: '52px',
  },
  title: {
    letterSpacing: '0px',
    color: colors.marine,
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

export type ProfilePassSectionPasswordChangeProps = Props;
export default ProfilePassSectionPasswordChange;
