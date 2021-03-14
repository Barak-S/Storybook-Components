import { ScreenTitle } from 'components/Common';
import { DashboardScreenContainer } from 'components/Dashboard';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardProfileScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Profile" />
      <DashboardScreenContainer>{`Profile`}</DashboardScreenContainer>
    </>
  );
};

export type DashboardProfileScreenProps = Props;
export default DashboardProfileScreen;
