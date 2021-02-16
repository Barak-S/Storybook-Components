import Amplify from '@aws-amplify/core';
import { appConfig } from 'core/configs';
import { Log } from 'utils';

const log = Log('core.amplify');

export const initAmplify = () => {
  log.info('init');
  // Re-use existing authentication resource
  // https://docs.amplify.aws/lib/auth/start/q/platform/js#re-use-existing-authentication-resource
  Amplify.configure({
    region: 'us-east-2',
    userPoolId: 'us-east-2_VLzGdy7Rm',
    userPoolWebClientId: '7jsoge4e7dmqk2e3uvpo94eqdv',
    clientMetadata: {
      type: 'web',
      env: appConfig.env,
      version: appConfig.version,
    },
  });
};
