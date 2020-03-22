import { SAVE_QUESTIONS } from 'src/actions/questions';

export const initialState = {
  list: [],
};

const questions = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUESTIONS:
      return {
        ...state,
        list: action.questions,
      };
    default:
      return state;
  }
};

export default questions;
