import { ScreenTitle } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardSupportScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Support" />
      {`Support`}
    </>
  );
};

export type DashboardSupportScreenProps = Props;
export default DashboardSupportScreen;
