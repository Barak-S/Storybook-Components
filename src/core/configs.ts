import { Log } from './log';

const log = Log('core.configs');

interface AppConfig {
  version: string;
  env: AppConfigEnv;
  url: string;
  name?: string;
  title?: string;
  company?: string;
  description?: string;
  api: {
    url: string;
  };
  cognito: {
    region: string;
    userPoolId: string;
    userPoolWebClientId: string;
    domain: string;
  };
  features: AppConfigFeatures;
}

type AppConfigEnv = 'loc' | 'dev' | 'qa' | 'beta' | 'prd';

const isEnv = (val: string): val is AppConfigEnv => ['loc', 'dev', 'qa', 'beta', 'prd'].includes(val);

const getAppConfig = (): AppConfig => ({
  version: APP_VERSION || '0.0.0',
  env: getAppConfigEnv(APP_ENV, 'prd'),
  url: APP_URL || '',
  name: APP_NAME,
  title: APP_TITLE,
  company: APP_COMPANY,
  description: APP_DESCRIPTION,
  api: {
    url: getStringOrThrow(API_URL, 'API_URL'),
  },
  cognito: {
    region: getStringOrThrow(COGNITO_REGION, 'COGNITO_REGION'),
    userPoolId: getStringOrThrow(COGNITO_USER_POOL_ID, 'COGNITO_USER_POOL_ID'),
    userPoolWebClientId: getStringOrThrow(COGNITO_WEB_CLIENT_ID, 'COGNITO_WEB_CLIENT_ID'),
    domain: getStringOrThrow(COGNITO_DOMAIN, 'COGNITO_DOMAIN'),
  },
  features: getFeatures(),
});

const getStringOrThrow = (val: string | undefined, name: string): string => {
  if (!val) {
    throw new Error(`${name} env variable is empty`);
  }
  return val;
};

const getAppConfigEnv = (val: string | undefined, def: AppConfigEnv): AppConfigEnv => {
  if (typeof val === 'undefined') {
    return def;
  }
  const pval = prepareConfVal(val);
  return isEnv(pval) ? pval : def;
};

const prepareConfVal = (val: string) => val.toLocaleLowerCase().trim();

// Features

interface AppConfigFeatures {
  socialSignIn: boolean;
}

const getFeatures = (): AppConfigFeatures => ({
  socialSignIn: true,
});

// Export

export const appConfig = getAppConfig();

log.debug(JSON.stringify(appConfig));

export default appConfig;
