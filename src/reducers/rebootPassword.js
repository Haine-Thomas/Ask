import {
  CHANGE_VALUE,
} from 'src/actions/rebootPassword';

export const initialState = {
  password: '',
  confirmPassword: '',
};

const rebootPassword = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        [action.passwordName]: action.passwordValue,
      };
    default:
      return state;
  }
};

export default rebootPassword;
