const baseUrl = 'https://diyenmomjang.com';
const wcEndpoint = '/wp-json/wc/v3';

export const environment = {
  production: true,
  origin: baseUrl,
  wcEndpoint: wcEndpoint,
  wcOrigin: baseUrl + wcEndpoint,
  woocommerce: {
    consumer_key:  'ck_1434416b1651805727e56b73629ade1fec55ee37',
    consumer_secret: 'cs_0815b704521bf882ef9f70322ff9a81a6f9410f7'
  }
};
