export const CHANGE_TOKEN_VALUE = 'CHANGE_TOKEN_VALUE';
export const ACTIVATE_USER = 'ACTIVATE_USER';

export const activateUser = () => ({
  type: ACTIVATE_USER,
});

export const changeTokenValue = (value) => ({
  type: CHANGE_TOKEN_VALUE,
  value,
});
