import { ScreenTitle } from 'components/Common';
import { ContentPolicy } from 'components/Content';
import { BackgroundedContainer } from 'components/Layout';
import { ScreenFooter } from 'components/Screen';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardPolicyScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Privacy Policy" />
      <BackgroundedContainer>
        <ContentPolicy />
      </BackgroundedContainer>
      <ScreenFooter theme="light" />
    </>
  );
};

export type DashboardPolicyScreenProps = Props;
export default DashboardPolicyScreen;
