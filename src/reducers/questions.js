import { SAVE_QUESTIONS } from 'src/actions/questions';

export const initialState = {
  list: [],
};

// reducer = traducteur d'une intention/action vers une modification du state
const questions = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUESTIONS:
       // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
       // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        list: action.questions,
      };
    default:
      return state;
  }
};

export default questions;
