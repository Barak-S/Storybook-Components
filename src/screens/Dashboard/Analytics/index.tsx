import { ScreenTitle } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardAnalyticsScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Analytics" />
      {`Analytics`}
    </>
  );
};

export type DashboardAnalyticsScreenProps = Props;
export default DashboardAnalyticsScreen;
