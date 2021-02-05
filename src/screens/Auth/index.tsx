import { ScreenTitle, View } from 'components/Common';
import { appConfig } from 'core/configs';
import React, { FC } from 'react';
import { ViewStyleProps } from 'styles';

type Props = ViewStyleProps;

export const AuthScreen: FC<Props> = ({ style }) => {
  return (
    <>
      <ScreenTitle title="Sign in" />
      <View style={[style]}>{appConfig.version}</View>
    </>
  );
};

export default AuthScreen;
