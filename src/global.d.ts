declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

declare module '*.md' {
  const content: unknown;
  export default content;
}

declare const APP_VERSION: string | undefined;
declare const APP_ENV: 'loc' | 'dev' | 'qa' | 'beta' | 'prd' | undefined;
declare const APP_NAME: string | undefined;
declare const APP_TITLE: string | undefined;
declare const APP_COMPANY: string | undefined;
declare const APP_DESCRIPTION: string | undefined;
declare const APP_URL: string | undefined;
declare const API_URL: string | undefined;
declare const COGNITO_USER_POOL_ID: string | undefined;
declare const COGNITO_WEB_CLIENT_ID: string | undefined;
declare const COGNITO_REGION: string | undefined;
declare const COGNITO_DOMAIN: string | undefined;
