import { Text } from 'components/Common';
import React, { FC } from 'react';
import { colors, ms, StyleProps, Styles } from 'styles';

interface Props extends StyleProps {
  className?: string;
}

export const AuthCopyrights: FC<Props> = ({ style, className }) => {
  return (
    <Text className={className} style={ms(styles.copyright, style)}>
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

export type AuthCopyrightsProps = Props;
export default AuthCopyrights;
