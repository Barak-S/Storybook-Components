import { ScreenTitle } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardContactScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Contact Us" />
      {`Contact Us`}
    </>
  );
};

export type DashboardContactScreenProps = Props;
export default DashboardContactScreen;
