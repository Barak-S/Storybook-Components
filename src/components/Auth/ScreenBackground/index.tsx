import { View } from 'components/Common';
import React, { FC } from 'react';

import { styles } from './styles';

export const AuthScreenBackground: FC = ({ children }) => {
  return <View style={styles.screenContainer}>{children}</View>;
};

export default AuthScreenBackground;
