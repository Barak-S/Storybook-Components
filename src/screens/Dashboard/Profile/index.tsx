import { ScreenTitle, Title } from 'components/Common';
import { DashboardScreenContainer } from 'components/Dashboard';
import { ProfileForm } from 'components/Profile';
import React, { FC } from 'react';
import { colors, mx, StyleProps, Styles } from 'styles';

type Props = StyleProps;

export const DashboardProfileScreen: FC<Props> = () => {
  return (
    <>
      <ScreenTitle title="Profile" />
      <DashboardScreenContainer>
        <Title style={styles.title} type="h1">
          {'Profile'}
        </Title>
        <ProfileForm />
      </DashboardScreenContainer>
    </>
  );
};

const styles: Styles = {
  title: {
    ...mx.font(50, colors.marineBlue),
    marginBottom: 38,
  },
};

export type DashboardProfileScreenProps = Props;
export default DashboardProfileScreen;
