export const CHANGE_EMAIL_VALUE = 'CHANGE_VALUE';
export const SEND_RECOVER_EMAIL = 'SEND_RECOVER_EMAIL';

export const changeEmailValue = (value) => ({
  type: CHANGE_EMAIL_VALUE,
  value,
});

export const sendRecoverEmail = () => ({
  type: SEND_RECOVER_EMAIL,
});
