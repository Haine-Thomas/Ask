export const CHANGE_VALUE = 'CHANGE_VALUE';
export const RESET_PASSWORD_REBOOT_VALUE = 'RESET_PASSWORD_REBOOT_VALUE';
export const REBOOT_PASSWORD = 'REBOOT_PASSWORD';

export const rebootPassword = () => ({
  type: REBOOT_PASSWORD,
});

export const resetPasswordRebootValue = () => ({
  type: RESET_PASSWORD_REBOOT_VALUE,
});

export const changeValue = (passwordValue, passwordName) => ({
  type: CHANGE_VALUE,
  passwordValue,
  passwordName,
});
