import {
  CHANGE_EMAIL_VALUE,
  RESET_PASSWORD_RECOVER_VALUE,
  STORE_USER_EMAIL,
} from 'src/actions/passwordRecover';

export const initialState = {
  value: '',
  user: { email: '' },
};

const passwordRecover = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_PASSWORD_RECOVER_VALUE:
      return {
        ...state,
        value: '',
      };

    case STORE_USER_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.user,
        },
      };

    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export default passwordRecover;
