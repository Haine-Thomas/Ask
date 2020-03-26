export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX';
export const FETCH_SIGNINUSER = 'FETCH_SIGNINUSER';
export const VERIFY_CALLBACK = 'VERIFY_CALLBACK';

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const changeCheckbox = () => ({
  type: CHANGE_CHECKBOX,
});

export const fetchSignInUser = () => ({
  type: FETCH_SIGNINUSER,
});

export const verifyCallback = (response) => ({
  type: VERIFY_CALLBACK,
  response,
});
