import {
  SAVE_QUESTIONS,
  CHANGE_INPUT_VALUE,
  FETCH_QUESTIONS,
  CHANGE_SORTED,
  SAVE_QUESTION_ID,
} from 'src/actions/questions';

export const initialState = {
  list: [],
  tagId: 'default',
  content: '',
  sorted: 'created_at',
  id: [],
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
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,

      };
    case FETCH_QUESTIONS:
      return {
        ...state,
        tagId: 'default',
        content: '',
      };
    case CHANGE_SORTED:
      return {
        ...state,
        sorted: action.sorted,
      };
    default:
      return state;
    case SAVE_QUESTION_ID:
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};

export default questions;
