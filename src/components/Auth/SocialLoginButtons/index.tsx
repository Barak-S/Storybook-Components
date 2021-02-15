import { SocialButton } from 'components/Buttons';
import React, { FC } from 'react';

import { Text, View } from 'components/Common';
import { styles, useStyles } from './styles';

export const AuthSocialLoginButtons: FC = () => {
  const classes = useStyles();
  return (
    <View style={styles.container} column alignItems="center">
      <View className={classes.container} row justifyContent="center">
        <Text style={styles.text}>Or Login with</Text>
      </View>
      <View style={styles.iconList} row>
        <SocialButton type="facebook" />
        <SocialButton type="google" />
        <SocialButton type="linkedin" />
      </View>
    </View>
  );
};

export default AuthSocialLoginButtons;
