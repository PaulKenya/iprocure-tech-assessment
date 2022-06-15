let baseUrl= "https://chanjoapi.health.go.ke/";

let api_url = baseUrl + 'api/'
let auth_url = baseUrl + 'token/'
let refresh_token_url = baseUrl + 'token/refresh/'
let otp_request_url = api_url + 'request-otp-authenticated/';
let unauthenticated_otp_request_url = api_url + 'request-otp/';
let reset_password_url = api_url + 'reset-password/';

export {
  baseUrl,
  api_url,
  auth_url,
  refresh_token_url,
  otp_request_url,
  unauthenticated_otp_request_url,
  reset_password_url
}