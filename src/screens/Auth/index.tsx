import { ScreenTitle, View } from 'components/Common';
import { appConfig } from 'core/configs';
import React, { FC } from 'react';
import { ViewStyleProps } from 'styles';

type Props = ViewStyleProps;

export const AuthScreen: FC<Props> = ({ style }) => {
  return (
    <>
      <ScreenTitle title="Sign in" />
      <View style={[style]}>{`v${appConfig.version}, env: ${appConfig.env}`}</View>
    </>
  );
};

export default AuthScreen;
