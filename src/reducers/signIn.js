import {
  CHANGE_VALUE,
  CHANGE_CHECKBOX,
  VERIFY_CALLBACK,
  EXPIRED_CALLBACK,
  RESET_ISVERIFIED,
  TOGGLE_OPEN_MODAL,
} from 'src/actions/signIn';


export const initialState = {
  email: '',
  name: '',
  password: '',
  confirmedPassword: '',
  checkbox: false,
  isVerified: false,
  open: false,
};

const signIn = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN_MODAL:
      return {
        ...state,
        open: !state.open,
      };
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
    case VERIFY_CALLBACK: {
      if (action.response) {
        return {
          ...state,
          isVerified: true,
        };
      }
    }
    case EXPIRED_CALLBACK:
      return {
        ...state,
        isVerified: false,
        
      };
      
    case RESET_ISVERIFIED:
      return {
        ...state,
        isVerified: false,
        checkbox: false,
      };
    default:
      return state;
  }
};

export default signIn;
