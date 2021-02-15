import { Text } from 'components/Common';
import React, { FC } from 'react';
import { colors, Styles, StyleProps, m } from 'styles';

type Props = StyleProps;

export const AuthCopyrights: FC<Props> = ({ style }) => {
  return (
    <Text style={m(styles.copyright, style)}>{`Copyright © ${new Date().getFullYear()} All rights reserved.`}</Text>
  );
};

const styles: Styles = {
  copyright: {
    color: colors.gray,
    fontSize: 16,
  },
};

export default AuthCopyrights;
