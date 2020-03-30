import {
  CHANGE_VALUE,
  CHANGE_CHECKBOX,
  VERIFY_CALLBACK,
  EXPIRED_CALLBACK,
  RESET_ISVERIFIED,
} from 'src/actions/signIn';

export const initialState = {
  email: '',
  name: '',
  password: '',
  confirmedPassword: '',
  checkbox: false,
  isVerified: false,
};

// reducer = traducteur d'une intention/action vers une modification du state
const signIn = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_CHECKBOX: {
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
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
      };
    default:
      return state;
  }
};

export default signIn;
