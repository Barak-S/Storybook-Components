import React, { FC } from 'react';
import { StyleProps } from 'styles';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import { ContentPolicy } from 'components/Content';
import { ScreenTitle } from 'components/Common';
import { BackgroundedContainer } from 'components/Layout';

type Props = StyleProps;

export const DashboardPolicyScreen: FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <ScreenTitle title="Privacy Policy" />
      <BackgroundedContainer>
        <ContentPolicy className={classes.content} />
      </BackgroundedContainer>
    </>
  );
};

const useStyles = (theme: Theme) =>
  makeStyles({
    content: {
      margin: '55px 35px',
    },
  })();

export type DashboardPolicyScreenProps = Props;
export default DashboardPolicyScreen;
