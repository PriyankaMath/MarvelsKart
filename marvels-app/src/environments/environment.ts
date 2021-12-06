// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import { domain, clientId } from '../../auth_config.json';

export const environment = {
  production: false,
  cognitoUserPoolId: "userPoolID",
  cognitoAppClientId: "AppClientId",

  sso_api_username: 'sso_api_username',
  sso_api_pwd: 'sso_api_pwd', 

  loginURL: 'https://localhost:4200/home',

  redirectURL: 'http://localhost:4200/home',

  cognitoTokenURL: 'https://localhost/oauth2/token',

  logout: 'https://localhost:4200/home'
  // auth: {
  //   domain,
  //   clientId,
  //   redirectUri: window.location.origin
  // }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
