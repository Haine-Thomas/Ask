import { SAVE_QUESTIONS, CHANGE_INPUT_VALUE, FETCH_QUESTIONS } from 'src/actions/questions';

export const initialState = {
  list: [],
  tagId: 'default',
  content: '',

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
    default:
      return state;
  }
};

export default questions;
