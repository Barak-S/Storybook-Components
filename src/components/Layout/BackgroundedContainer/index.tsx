import backgroundImg from './assets/background.png';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { mc, StyleProps } from 'styles';
import { makeStyles } from '@material-ui/core';

interface Props extends StyleProps {
  className?: string;
}

export const BackgroundedContainer: FC<Props> = ({ className, style, children }) => {
  const classes = useStyles();

  return (
    <View className={mc(classes.container, className)} style={style}>
      {children}
    </View>
  );
};

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url("${backgroundImg}")`,
    backgroundSize: 'cover',
  },
});

export type BackgroundedContainerProps = Props;
export default BackgroundedContainer;
