import { SocialButton, SocialButtonNetworkType } from 'components/Buttons';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  onBtnClick?: (type: SocialButtonNetworkType) => void;
}

export const AuthSocialLoginButtons: FC<Props> = ({ style, onBtnClick }) => {
  return (
    <View style={[styles.container, style]} row alignItems="center" justifyContent="center">
      <SocialButton style={styles.item} type="facebook" onClick={onBtnClick} />
      <SocialButton style={styles.item} type="google" onClick={onBtnClick} />
      <SocialButton style={styles.item} type="linkedin" onClick={onBtnClick} />
    </View>
  );
};

const styles: Styles = {
  container: {
    width: '100%',
  },
  item: {
    maxWidth: 153,
    marginLeft: 10,
    marginRight: 10,
  },
};

export default AuthSocialLoginButtons;
