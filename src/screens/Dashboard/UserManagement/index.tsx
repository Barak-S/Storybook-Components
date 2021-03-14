import { ScreenTitle } from 'components/Common';
import { DashboardScreenContainer } from 'components/Dashboard';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardUserManagementScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="User management" />
      <DashboardScreenContainer>{'User management'}</DashboardScreenContainer>
    </>
  );
};

export type DashboardUserManagementScreenProps = Props;
export default DashboardUserManagementScreen;
