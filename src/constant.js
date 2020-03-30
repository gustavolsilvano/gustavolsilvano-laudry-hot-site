const env = 'dev';
// const env = 'prod'

export const BASE_URL =
  env === 'dev'
    ? 'https://c00d9498.ngrok.io'
    : 'https://laudryme.herokuapp.com/';
