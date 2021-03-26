import { ScreenTitle } from 'components/Screen';
import { DashboardScreenContainer } from 'components/Dashboard';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardSupportScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Support" />
      <DashboardScreenContainer>{`Support`}</DashboardScreenContainer>
    </>
  );
};

export type DashboardSupportScreenProps = Props;
export default DashboardSupportScreen;
