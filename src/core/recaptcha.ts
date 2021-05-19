import { appConfig } from './configs';

export const getRecaptchaChallangeToken = async (): Promise<string> => grecaptcha.execute(appConfig.recaptcha.public);
