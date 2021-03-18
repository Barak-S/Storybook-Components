import { makeStyles } from '@material-ui/core';
import { ScreenTitle } from 'components/Common';
import { ContentPolicy } from 'components/Content';
import { BackgroundedContainer } from 'components/Layout';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

type Props = StyleProps;

export const DashboardPolicyScreen: FC<Props> = () => {
  const classes = useStyles();
  return (
    <>
      <ScreenTitle title="Privacy Policy" />
      <BackgroundedContainer>
        <ContentPolicy className={classes.content} />
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

export type DashboardPolicyScreenProps = Props;
export default DashboardPolicyScreen;
