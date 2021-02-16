import { View, Text, ScreenTitle } from 'components/Common';
import React, { FC } from 'react';
import { Styles, StyleProps } from 'styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'core/api';
import { routes } from 'screens/consts';

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
      <View style={[styles.container, style]} column={true}>
        <Text>{`Dashboard goes here`}</Text>
        <Button style={{ width: 200, marginTop: 10 }} variant="contained" color="primary" onClick={handleLogoutClick}>
          {'Logout'}
        </Button>
      </View>
    </>
  );
};

const styles: Styles = {
  container: {},
};

export type DashboardScreenProps = Props;
export default DashboardScreen;
