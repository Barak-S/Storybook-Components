import { ContentFAQ } from 'components/Content';
import { BackgroundedContainer } from 'components/Layout';
import { ScreenFooter, ScreenTitle } from 'components/Screen';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardFaqScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="FAQ" />
      <BackgroundedContainer>
        <ContentFAQ />
      </BackgroundedContainer>
      <ScreenFooter theme="light" />
    </>
  );
};

export type DashboardFaqScreenProps = Props;
export default DashboardFaqScreen;
