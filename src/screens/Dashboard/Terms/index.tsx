import { ScreenTitle } from 'components/Screen';
import { ContentTerms } from 'components/Content';
import { ScreenFooter } from 'components/Screen';
import { BackgroundedContainer } from 'components/Layout';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardTermsScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Terms" />
      <BackgroundedContainer>
        <ContentTerms />
      </BackgroundedContainer>
      <ScreenFooter theme="light" />
    </>
  );
};

export type DashboardTermsScreenProps = Props;
export default DashboardTermsScreen;
