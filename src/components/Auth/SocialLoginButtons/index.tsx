import { Grid } from '@material-ui/core';
import { SocialButton, SocialButtonNetworkType } from 'components/Buttons';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  /** Click on some of the button */
  onBtnClick?: (type: SocialButtonNetworkType) => void;
}

export const AuthSocialLoginButtons: FC<Props> = ({ style, onBtnClick }) => {
  return (
    <View style={[styles.container, style]} row alignItems="center" justifyContent="center">
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <SocialButton style={styles.item} type="google" onClick={onBtnClick} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SocialButton style={styles.item} type="facebook" onClick={onBtnClick} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SocialButton style={styles.item} type="linkedin" onClick={onBtnClick} />
        </Grid>
      </Grid>
    </View>
  );
};

const styles: Styles = {
  container: {
    width: '100%',
  },
};

export type AuthSocialLoginButtonsProps = Props;
export default AuthSocialLoginButtons;
