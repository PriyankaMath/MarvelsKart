// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import { domain, clientId } from '../../auth_config.json';

export const environment = {
  production: false,
  cognitoUserPoolId: "us-east-1_nOVUQ5aJB",
  cognitoAppClientId: "4pfslbj8gn1e8rmb7g7rcmvp0u",

  sso_api_username: '4pfslbj8gn1e8rmb7g7rcmvp0u',
  sso_api_pwd: '10a5vtfaep03jfstc7felba4uf6rm1b3ki0j0gnf4gq3hmublbd3', 

  loginURL: 'https://marvelskart.auth.us-east-1.amazoncognito.com/login?'+
            'client_id=4pfslbj8gn1e8rmb7g7rcmvp0u&response_type=code&scope=openid+profile&'+
            'redirect_uri=http://localhost:4200/home',

  redirectURL: 'http://localhost:4200/home',

  cognitoTokenURL: 'https://marvelskart.auth.us-east-1.amazoncognito.com/oauth2/token',

  logout: 'https://marvelskart.auth.us-east-1.amazoncognito.com/logout?' +
          'client_id=4pfslbj8gn1e8rmb7g7rcmvp0u&' +
          'logout_uri=http://localhost:4200/home'
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
