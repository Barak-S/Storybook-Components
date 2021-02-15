import backgroundImg from './assets/background.png';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const AuthScreenBackground: FC<Props> = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export const styles: Styles = {
  container: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url("${backgroundImg}")`,
    backgroundSize: 'cover',
  },
};

export default AuthScreenBackground;
