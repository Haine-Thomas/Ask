import { CHANGE_VALUE, CHANGE_CHECKBOX } from 'src/actions/signIn';

export const initialState = {
  email: '',
  name: '',
  password: '',
  confirmedPassword: '',
  checkbox: false,
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
    default:
      return state;
  }
};

export default signIn;
