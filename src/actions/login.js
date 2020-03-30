export const LOGIN_ACTION = 'LOGIN_ACTION';
export const DISCONNECT_ACTION = 'DISCONNECT_ACTION';
export const CHANGE_USER = 'CHANGE_USER';
export const CHANGE_VALUE_LOGIN = 'CHANGE_VALUE_LOGIN';
export const DELETE_USER = 'DELETE_USER';

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

export const deleteUser = (id) => ({
  type: DELETE_USER,
  id,
});
