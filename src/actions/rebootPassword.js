export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (passwordValue, passwordName) => ({
  type: CHANGE_VALUE,
  passwordValue,
  passwordName,
});
