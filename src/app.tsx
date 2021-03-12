import { Text } from 'components/Common';
import { useSnackbar } from 'components/Feedback';
import { Log, useAuth } from 'core';
import { initAmplify } from 'core/amplify';
import { appConfig } from 'core/configs';
import { parseUrlSearchStr } from 'core/navigation';
import React, { FC, useEffect } from 'react';
import { Screens } from 'screens';
import { mx, Styles } from 'styles';
import { capitalizeFirstLetter } from 'utils';

const log = Log('app');

initAmplify();

export const App: FC = () => {
  const { loaded: authLoaded, user: authUser } = useAuth();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    processIncomingQsParams();
  }, []);

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
      {authLoaded && <Screens logined={!!authUser} />}
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
