export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SEND_RECOVER_EMAIL = 'SEND_RECOVER_EMAIL';

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});

export const sendRecoverEmail = () => ({
  type: SEND_RECOVER_EMAIL,
});
