import { ScreenTitle } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardProfileScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Profile" />
      {`Profile`}
    </>
  );
};

export type DashboardProfileScreenProps = Props;
export default DashboardProfileScreen;
