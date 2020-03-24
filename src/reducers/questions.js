import { SAVE_QUESTIONS, CHANGE_INPUT_VALUE } from 'src/actions/questions';

export const initialState = {
  list: [],
  tagId: '',
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
    default:
      return state;
  }
};

export default questions;
