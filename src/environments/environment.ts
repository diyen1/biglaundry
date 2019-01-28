// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const baseUrl = 'https://diyenmomjang.com';
// const wcEndpoint = '/wp-json/wc/v3';
//
// export const environment = {
//   production: false,
//   origin: baseUrl,
//   wcEndpoint: wcEndpoint,
//   wcOrigin: baseUrl + wcEndpoint,
//   woocommerce: {
//     consumer_key:  'ck_1434416b1651805727e56b73629ade1fec55ee37',
//     consumer_secret: 'cs_0815b704521bf882ef9f70322ff9a81a6f9410f7'
//   }
// };

export const environment = {
  production: false,
  origin: 'http://localhost/biglaundry',
  wcEndpoint: '/wp-json/wc/v3',
  wcOrigin: 'http://localhost/biglaundry/wp-json/wc/v3',
  wcLegacyOrigin: 'http://localhost/biglaundry/wp-json/wc/v2',
  woocommerce: {
    consumer_key:  'ck_34abd82a5862d33fd95beb99fe6ff0463d016097',
    consumer_secret: 'cs_a7c9e95666beedf199f085a5a970a0d42c0bca31'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
