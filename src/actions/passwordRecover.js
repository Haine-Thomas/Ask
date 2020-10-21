export const CHANGE_EMAIL_VALUE = 'CHANGE_VALUE';
export const SEND_RECOVER_EMAIL = 'SEND_RECOVER_EMAIL';
export const RESET_PASSWORD_RECOVER_VALUE = 'RESET_PASSWORD_RECOVER_VALUE';
export const STORE_USER_EMAIL = 'STORE_USER_EMAIL';

export const resetPasswordRecoverValue = () => ({
  type: RESET_PASSWORD_RECOVER_VALUE,
});

export const changeEmailValue = (value) => ({
  type: CHANGE_EMAIL_VALUE,
  value,
});

export const sendRecoverEmail = () => ({
  type: SEND_RECOVER_EMAIL,
});

export const storeUserEmail = (user) => ({
  type: STORE_USER_EMAIL,
  user,
});
