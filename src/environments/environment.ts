const apiUrl = 'http://localhost:3002';
const productUrl = `${apiUrl}/product`;
const uiOptionsUrl = `${productUrl}/ui`;
const floorUrl = `${uiOptionsUrl}/floor`;
const homeUrl = `${uiOptionsUrl}/home`;
const imageUrl = `${uiOptionsUrl}/floor`;
const paypalToken = 'AbPuSSYRdEc21DvHLVuUAKCgY2mBKvlA_Qel3mdJz541fx3230NJG50tvF6w5RHn-Ul7aA3NV5damDh-';
export const environment = {
  production: false,
  apiUrl,
  homeUrl,
  productUrl,
  uiOptionsUrl,
  floorUrl,
  paypalToken
  // apiUrl: 'http://54.254.213.149/buyer.gstock  CLIENT REFERRAL--'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
