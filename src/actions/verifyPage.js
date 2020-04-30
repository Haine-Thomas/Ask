export const CHANGE_TOKEN_VALUE = 'CHANGE_TOKEN_VALUE';
export const ACTIVATE_USER = 'ACTIVATE_USER';
export const RESET_TOKEN_VALUE = 'RESET_TOKEN_VALUE';

export const activateUser = () => ({
  type: ACTIVATE_USER,
});

export const resetTokenValue = () => ({
  type: RESET_TOKEN_VALUE,
});

export const changeTokenValue = (value) => ({
  type: CHANGE_TOKEN_VALUE,
  value,
});
