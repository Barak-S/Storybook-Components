import { makeStyles } from '@material-ui/core';
import { ScreenTitle } from 'components/Common';
import { ContentTerms } from 'components/Content';
import { BackgroundedContainer } from 'components/Layout';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardTermsScreen: FC<Props> = () => {
  const classes = useStyles();
  return (
    <>
      <ScreenTitle title="Terms" />
      <BackgroundedContainer>
        <ContentTerms className={classes.content} />
      </BackgroundedContainer>
    </>
  );
};

const useStyles = () =>
  makeStyles({
    content: {
      margin: '55px 35px',
    },
  })();

export type DashboardTermsScreenProps = Props;
export default DashboardTermsScreen;
