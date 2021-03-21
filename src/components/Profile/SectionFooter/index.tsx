import { ContainedButton } from 'components/Buttons';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { colors, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  onSaveClick?: () => void;
}

export const ProfileSectionFooter: FC<Props> = ({ style, onSaveClick }) => {
  return (
    <View row style={[styles.container, style]}>
      <ContainedButton style={styles.btn} onClick={onSaveClick}>
        {'SAVE'}
      </ContainedButton>
    </View>
  );
};

const styles: Styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    background: colors.coolBlue,
    borderRadius: '6px',
    width: '166px!important',
    height: '52px',
  },
};

export type ProfileSectionFooterProps = Props;
export default ProfileSectionFooter;
