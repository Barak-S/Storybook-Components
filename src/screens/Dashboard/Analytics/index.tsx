import { ScreenTitle } from 'components/Screen';
import { DashboardScreenContainer } from 'components/Dashboard';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardAnalyticsScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Analytics" />
      <DashboardScreenContainer>{`Analytics`}</DashboardScreenContainer>
    </>
  );
};

export type DashboardAnalyticsScreenProps = Props;
export default DashboardAnalyticsScreen;
