import backgroundImg from './assets/background.png';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const BackgroundedContainer: FC<Props> = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export const styles: Styles = {
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url("${backgroundImg}")`,
    backgroundSize: 'cover',
  },
};

export type BackgroundedContainerProps = Props;
export default BackgroundedContainer;
