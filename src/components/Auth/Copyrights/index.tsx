import { Text } from 'components/Common';
import React, { FC } from 'react';
import { colors, Styles, m, Style } from 'styles';

interface Props {
  style?: Style;
  className?: string;
}

export const AuthCopyrights: FC<Props> = ({ style, className }) => {
  return (
    <Text className={className} style={m(styles.copyright, style)}>
      {`Copyright © ${new Date().getFullYear()} All rights reserved.`}
    </Text>
  );
};

const styles: Styles = {
  copyright: {
    color: colors.gray,
    fontSize: 16,
  },
};

export default AuthCopyrights;
