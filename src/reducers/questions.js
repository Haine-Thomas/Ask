import {
  SAVE_QUESTIONS,
  CHANGE_INPUT_VALUE,
  FETCH_QUESTIONS,
  CHANGE_SORTED,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SAVE_QUESTION_ID,
  DELETE_QUESTION,
} from 'src/actions/questions';

export const initialState = {
  list: [],
  tagId: 'default',
  content: '',
  sorted: 'created_at',
  votedQuestionId: 0,
  vote: '',
  clickedQuestionId: '',
  questionToDelete: 0,
};

const questions = (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_QUESTION:
      return {
        ...state,
        questionToDelete: action.id,
      };
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
    case INCREMENT_COUNTER:
      return {
        ...state,
        vote: 'upVote',
        votedQuestionId: action.questionId,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        vote: 'downVote',
        votedQuestionId: action.questionId,
      };
    case SAVE_QUESTION_ID:
      return {
        ...state,
        clickedQuestionId: action.id,
      };
    default:
      return state;
  }
};

export default questions;
