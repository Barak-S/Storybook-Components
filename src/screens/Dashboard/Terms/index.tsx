import { ScreenTitle } from 'components/Common';
import { ContentTerms } from 'components/Content';
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
    </>
  );
};


export type DashboardTermsScreenProps = Props;
export default DashboardTermsScreen;
