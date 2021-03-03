import { ScreenTitle } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardFaqScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="FAQ" />
      {`FAQ`}
    </>
  );
};

export type DashboardFaqScreenProps = Props;
export default DashboardFaqScreen;
