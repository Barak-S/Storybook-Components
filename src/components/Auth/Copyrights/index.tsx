import React, { FC } from 'react';
import { Text } from 'components/Common';

import { styles } from './styles';

export const AuthCopyrights: FC = () => {
  return <Text style={styles.copyright}>{`Copyright © ${new Date().getFullYear()} All rights reserved.`}</Text>;
};

export default AuthCopyrights;
