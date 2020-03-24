import { TOGGLE_OPEN } from 'src/actions';
import { CHANGE_USER, CHANGE_VALUE_LOGIN, DISCONNECT_ACTION } from 'src/actions/login';

const initialState = {
  open: false,
  isLogged: false,
  user: {
    id: null,
    email: '',
    password: '',
    pseudo: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_VALUE_LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.value,
        },
      };
    case CHANGE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          pseudo: action.user.name,
          email: action.user.email,
          id: action.user.id,
          password: '',
        },
        open: false,
        isLogged: true,
      };
    case DISCONNECT_ACTION:
      return {
        ...state,
        user: {
          ...state.user,
          pseudo: '',
          email: '',
          id: null,
          password: '',
        },
        isLogged: false,
      };
    default:
      return state;
  }
};

export default reducer;
