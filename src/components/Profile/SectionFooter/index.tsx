import { ContainedButton } from 'components/Buttons';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps, Styles, ms } from 'styles';

interface Props extends StyleProps {
  processing?: boolean;
  disabled?: boolean;
  onSaveClick?: () => void;
}

export const ProfileSectionFooter: FC<Props> = ({ style, processing, disabled, onSaveClick }) => {
  return (
    <View row style={styles.container}>
      <ContainedButton style={ms(styles.btn, style)} disabled={disabled} processing={processing} onClick={onSaveClick}>
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
    width: '166px',
  },
};

export type ProfileSectionFooterProps = Props;
export default ProfileSectionFooter;
