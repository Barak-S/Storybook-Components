import { Text } from 'components/Common';
import { useSnackbar } from 'components/Feedback';
import { Log, setLogColorized, useAuth } from 'core';
import { initAmplify } from 'core/amplify';
import { ApiError } from 'core/api';
import { appConfig } from 'core/configs';
import { parseUrlSearchStr } from 'core/navigation';
import { getStorageVal } from 'core/storage';
import httpStatus from 'http-status';
import React, { FC, useEffect } from 'react';
import { Screens } from 'screens';
import { useSelector, useStoreManager } from 'store';
import { mx, Styles } from 'styles';
import { capitalizeFirstLetter } from 'utils';

const log = Log('app');

setLogColorized(getStorageVal('log:colorized') === true ? true : false);

initAmplify();

export const App: FC = () => {
  const { loaded: authLoaded, user: authUser } = useAuth();
  const { showSnackbar } = useSnackbar();
  const manager = useStoreManager();
  const token = useSelector(s => s.auth.token);

  useEffect(() => {
    processIncomingQsParams();
  }, []);

  // Update token if current user is loggined throw Cognito
  useEffect(() => {
    manager.auth.update().catch(err => log.err('auth update err=', err));
  }, [authUser]);

  // Update user's data if we do have a token at storage.auth.token
  useEffect(() => {
    if (token) {
      updateUser();
    }
  }, [token]);

  const updateUser = async () => {
    try {
      await manager.user.updateData();
      await manager.user.updateSettings();
      await manager.orgs.updateAndCheckCurrent();
    } catch (err: unknown) {
      // Init and update user, if it not found at the DB
      if (err instanceof ApiError && err.status === httpStatus.NOT_FOUND) {
        updateUserWithInit();
      } else {
        log.err('profile update err=', err);
      }
    }
  };

  const updateUserWithInit = async () => {
    try {
      await manager.user.init();
      await manager.user.updateSettings();
      await manager.orgs.updateAndCheckCurrent();
    } catch (err: unknown) {
      log.err('profile update err=', err);
    }
  };

  // Incoming params

  const processIncomingQsParams = () => {
    const params = parseUrlSearchStr(location.search);
    if (params.action === 'cognitoConfirmUser') {
      processCognitoConfirmUserAction(params);
    }
    if (params.action === 'cognitoConfirmAttr') {
      processCognitoConfirmAttrAction(params);
    }
  };

  const processCognitoConfirmUserAction = (params: Record<string, string>) => {
    log.info('processing incoming cognitoConfirmUser action, params=', params);
    if (params.err) {
      showSnackbar(params.err, 'error');
    } else {
      showSnackbar('User has been confirmed!', 'success');
    }
  };

  const processCognitoConfirmAttrAction = (params: Record<string, string>) => {
    log.info('processing incoming cognitoConfirmEmail action, params=', params);
    const { err, name = 'email' } = params;
    if (err) {
      if (err.indexOf('Invalid code provided') >= 0) {
        showSnackbar('Looks like you are trying to use the same URL twice. Please request a new URL', 'error');
      } else {
        showSnackbar(`Confirming ${name} error: ${err}`, 'error');
      }
    } else {
      showSnackbar(`${capitalizeFirstLetter(name)} has been confirmed!`, 'success');
    }
  };

  // Render

  return (
    <>
      {authLoaded && <Screens loggedIn={!!authUser} />}
      {appConfig.env !== 'prd' && <Text style={styles.envLabel} block>{`v${appConfig.version} (${appConfig.env})`}</Text>}
    </>
  );
};

const styles: Styles = {
  envLabel: {
    position: 'fixed',
    right: 8,
    bottom: 8,
    ...mx.font(10, 'inherit', 500),
    zIndex: 100,
  },
};

export default App;
