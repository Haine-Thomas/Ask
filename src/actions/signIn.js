export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const changeCheckbox = () => ({
  type: CHANGE_CHECKBOX,
});
