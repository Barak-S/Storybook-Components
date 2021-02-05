interface AppConfig {
  version: string;
  env: AppConfigEnv;
  url: string;
  name?: string;
  title?: string;
  company?: string;
  description?: string;
}

type AppConfigEnv = 'loc' | 'dev' | 'qa' | 'beta' | 'prd';

const isEnv = (val: string): val is AppConfigEnv => ['loc', 'dev', 'qa', 'beta', 'prd'].includes(val);

const getAppConfig = (): AppConfig => ({
  version: VERSION || '0.0.0',
  env: getAppConfigEnv(ENV, 'prd'),
  url: APP_URL || '',
  name: APP_NAME,
  title: APP_TITLE,
  company: APP_COMPANY,
  description: APP_DESCRIPTION,
});

const getAppConfigEnv = (val: string | undefined, def: AppConfigEnv): AppConfigEnv => {
  if (typeof val === 'undefined') {
    return def;
  }
  const pval = prepareConfVal(val);
  return isEnv(pval) ? pval : def;
};

const prepareConfVal = (val: string) => val.toLocaleLowerCase().trim();

export const appConfig = getAppConfig();
