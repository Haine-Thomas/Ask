import { TOGGLE_OPEN } from 'src/actions';
import {
  CHANGE_USER,
  CHANGE_VALUE_LOGIN,
  DISCONNECT_ACTION,
  DELETE_USER,
  MODIFY_USER,
} from 'src/actions/login';

const initialState = {
  open: false,
  isLogged: false,
  user: {
    id: 0,
    email: '',
    password: '',
    pseudo: '',
    created_at: '',
  },
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case MODIFY_USER:
      return {
        ...state,
      };
    case DELETE_USER:
      return {
        ...state,
      };
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
          created_at: action.user.created_at,
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
          id: 0,
          password: '',
        },
        isLogged: false,
      };
    default:
      return state;
  }
};

export default login;
