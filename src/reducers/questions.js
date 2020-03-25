import {
  SAVE_QUESTIONS,
  CHANGE_INPUT_VALUE,
  FETCH_QUESTIONS,
  CHANGE_SORTED,
} from 'src/actions/questions';

export const initialState = {
  list: [],
  tagId: 'default',
  content: '',
  sorted: 'created_at',
};

const questions = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUESTIONS:
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
  }
};

export default questions;
