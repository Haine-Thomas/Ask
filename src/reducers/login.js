import { TOGGLE_OPEN } from 'src/actions';
import {
  CHANGE_USER,
  CHANGE_VALUE_LOGIN,
  DISCONNECT_ACTION,
  DELETE_USER,
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

// reducer = traducteur d'une intention/action vers une modification du state
const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
      };
    case TOGGLE_OPEN:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_VALUE_LOGIN:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.value,
        },
      };
    case CHANGE_USER:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
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
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
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

export default login;
