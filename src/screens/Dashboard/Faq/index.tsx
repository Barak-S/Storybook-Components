import { ScreenTitle } from 'components/Common';
import { DashboardScreenContainer } from 'components/Dashboard';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardFaqScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="FAQ" />
      <DashboardScreenContainer>{`FAQ`}</DashboardScreenContainer>
    </>
  );
};

export type DashboardFaqScreenProps = Props;
export default DashboardFaqScreen;
