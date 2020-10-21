import {
  CHANGE_VALUE,
  RESET_PASSWORD_REBOOT_VALUE,
} from 'src/actions/rebootPassword';

export const initialState = {
  password: '',
  confirmPassword: '',
};

const rebootPassword = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.passwordName]: action.passwordValue,
      };
    case RESET_PASSWORD_REBOOT_VALUE:
      return {
        ...state,
        password: '',
        confirmPassword: '',
      };
    default:
      return state;
  }
};

export default rebootPassword;
