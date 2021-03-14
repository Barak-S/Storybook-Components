import { ScreenTitle } from 'components/Common';
import { DashboardScreenContainer } from 'components/Dashboard';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardContactScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Contact Us" />
      <DashboardScreenContainer>{`Contact Us`}</DashboardScreenContainer>
    </>
  );
};

export type DashboardContactScreenProps = Props;
export default DashboardContactScreen;
