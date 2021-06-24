import React, { FC } from 'react';
import { colors, Styles, ms, mx, StyleProps } from 'styles';
import { View } from 'components/Common';

type Props = StyleProps;

export const VerticalSplitter: FC<Props> = ({ style }) => {
  return <View style={ms(styles.splitter, style)} />;
};

const styles: Styles = {
  splitter: {
    width: 1,
    height: 20,
    ...mx.borderRight(1, 'solid', colors.tint4),
  },
};

export default VerticalSplitter;
