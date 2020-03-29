export const LOGIN_ACTION = 'LOGIN_ACTION';
export const DISCONNECT_ACTION = 'DISCONNECT_ACTION';
export const CHANGE_USER = 'CHANGE_USER';
export const CHANGE_VALUE_LOGIN = 'CHANGE_VALUE_LOGIN';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';

export const loginAction = () => ({
  type: LOGIN_ACTION,
});

export const disconnectAction = () => ({
  type: DISCONNECT_ACTION,
});

export const changeUser = (user) => ({
  type: CHANGE_USER,
  user,
});

export const changeValueLogin = (value, name) => ({
  type: CHANGE_VALUE_LOGIN,
  value,
  name,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});
