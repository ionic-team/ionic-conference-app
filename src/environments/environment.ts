// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  firebase: {
    projectId: 'mining-expo-bc804',
    appId: '1:62716428182:web:25c49a91cf0b6be8aa67b7',
    storageBucket: 'mining-expo-bc804.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyA4ieOO-HEl7GyhdDR1aj8_7yRjI5IRinM',
    authDomain: 'mining-expo-bc804.firebaseapp.com',
    messagingSenderId: '62716428182',
    measurementId: 'G-J6Q77G3MC4',
  },
  production: false
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
