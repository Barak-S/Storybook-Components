import { View, Text, ScreenTitle } from 'components/Common';
import React, { FC } from 'react';
import { Styles, StyleProps } from 'styles';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'core/api';
import { routes } from 'screens/consts';
import { DashboardAppBar } from 'components/Dashboard';

type Props = StyleProps;

export const DashboardScreen: FC<Props> = ({ style }) => {
  const history = useHistory();
  const { signOut } = useAuth();

  const handleLogoutClick = () => {
    signOut();
    history.push({ pathname: routes.signin });
  };

  return (
    <>
      <ScreenTitle title="Dashboard" />
      <DashboardAppBar
        onLogoClick={() => history.push({ pathname: routes.dashboard })}
        onLogoutClick={handleLogoutClick}
      />
      <View style={[styles.container, style]} column={true} justifyContent="center" alignItems="center">
        <Text>{`Dashboard will goes here`}</Text>
      </View>
    </>
  );
};

const styles: Styles = {
  container: {
    padding: 40,
  },
};

export type DashboardScreenProps = Props;
export default DashboardScreen;
