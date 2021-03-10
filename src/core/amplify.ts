import Amplify from '@aws-amplify/core';
import { appConfig } from 'core/configs';
import { isString } from 'lodash';
import { Log } from 'utils';
import { getStorageVal, setStorageVal } from './storage';

const log = Log('core.amplify');

// Re-use existing authentication resource
// https://docs.amplify.aws/lib/auth/start/q/platform/js#re-use-existing-authentication-resource
const getAmpifyConfig = () => ({
  ...appConfig.cognito,
  clientMetadata: {
    type: 'web',
    env: appConfig.env,
    version: appConfig.version,
  },
  oauth: {
    domain: appConfig.cognito.domain,
    scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    redirectSignIn: appConfig.url,
    redirectSignOut: appConfig.url,
    responseType: 'code',
  },
});

export type AmpifySessionStorageType = 'local' | 'session';

const storageTypeKey = 'storageType';

export const getAmpifyStorageType = (): AmpifySessionStorageType => {
  const curStorageType = getStorageVal(storageTypeKey);
  if (!isString(curStorageType)) {
    return 'local';
  }
  return curStorageType === 'session' ? 'session' : 'local';
};

export const setAmpifyStorageType = (val: AmpifySessionStorageType) => {
  log.info('ampify storage type changed, val=', val);
  setStorageVal(storageTypeKey, val);
  Amplify.configure({
    ...getAmpifyConfig(),
    storage: val === 'local' ? localStorage : sessionStorage,
  });
};

export const initAmplify = () => {
  const storageType = getAmpifyStorageType();
  log.info('init, storageType=', storageType);
  Amplify.configure({
    ...getAmpifyConfig(),
    storage: storageType === 'local' ? localStorage : sessionStorage,
  });
};
