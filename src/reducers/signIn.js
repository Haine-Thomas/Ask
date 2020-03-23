import { CHANGE_VALUE, CHANGE_CHECKBOX } from 'src/actions/signIn';

export const initialState = {
  email: '',
  name: '',
  password: '',
  confirmedPassword: '',
  checkbox: false,
};

const signIn = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_CHECKBOX: {
      return {
        ...state,
        checkbox: !state.checkbox,
      };
    }
    default:
      return state;
  }
};

export default signIn;
