import { ACCESS_TOKEN, AUTH_HOST, AUTH_URL } from './constants';
import { getCookieToken, removeAccessToken } from './accessToken';

export function authorize() {
  window.top.location = `${AUTH_URL}`;
}

export function logout() {
  const token = getCookieToken();
  let logoutUrl = `${AUTH_HOST}/logout`;
  if (token) {
    logoutUrl += `?${ACCESS_TOKEN}=${getCookieToken()}`;
  }
  removeAccessToken();
  localStorage.clear();
  const historyPath = sessionStorage.getItem('historyPath');
  sessionStorage.clear();
  sessionStorage.setItem('historyPath', historyPath);
  window.location = logoutUrl;
}

export function authorizeC7n() {
  // 为了把这个hash传到oauth里要把#换成%23
  let uri = `${window.location.origin}/#${sessionStorage.getItem('historyPath') || '/'}`;
  if (uri.indexOf('?') > 0) {
    uri += '&redirectFlag'
  } else {
    uri += '?redirectFlag'
  }
  const redirect_uri = escape(uri)
  window.localStorage.removeItem('lastClosedId');
  // 这里是为了告诉oauth我要重定向的uri是什么，必须和client中对应，跳转到非client的页面会报错。
  window.location = `${AUTH_URL}&redirect_uri=${redirect_uri}`;
}

export function authorizeUrl() {
  window.location = `${window.location.origin}/#/unauthorized`;
}

/**
 * 登出
 */
export function logoutC7n() {
  const token = getCookieToken();
  let logoutUrl = `${AUTH_HOST}/logout`;
  if (token) {
    logoutUrl += `?${ACCESS_TOKEN}=${getCookieToken()}`;
  }
  removeAccessToken();
  window.localStorage.removeItem('lastClosedId');
  sessionStorage.clear();
  window.location = logoutUrl;
}
