import { ScreenTitle } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardUserManagementScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="User management" />
      {'User management'}
    </>
  );
};

export type DashboardUserManagementScreenProps = Props;
export default DashboardUserManagementScreen;
