import { makeStyles } from '@material-ui/core';
import { Text, View } from 'components/Common';
import React, { FC } from 'react';
import { colors, StyleProps } from 'styles';

type Props = StyleProps;

export const AuthSectionSplitter: FC<Props> = ({ children, style }) => {
  const classes = useStyles();
  return (
    <View className={classes.container} style={style} row justifyContent="center">
      <Text className={classes.text}>{children}</Text>
    </View>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    marginBottom: 21,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      width: '100%',
      borderBottom: `1px solid ${colors.veryLightPinkTwo}`,
    },
  },
  text: {
    padding: '0 20px',
    background: colors.white,
    position: 'relative',
  },
}));

export type AuthSectionSplitterProps = Props;
export default AuthSectionSplitter;
