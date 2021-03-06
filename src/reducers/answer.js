import {
  SAVE_ANSWERS,
  CHANGE_SORT,
  FETCH_POST_ANSWER,
  CHANGE_ANSWER_VALUE,
  INCREMENT_COUNTER_ANSWER,
  DECREMENT_COUNTER_ANSWER,
  DELETE_ANSWER,
} from 'src/actions/answers';

export const initialState = {
  value: '',
  votedAnswer: 0,
  vote: '',
  sorted: 'best',
  answerToDelete: 0,
};

const answers = (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_ANSWER:
      return {
        ...state,
        answerToDelete: action.id,
      };
    case SAVE_ANSWERS:
      return {
        ...state,
        list: action.answers,
        value: '',
      };
    case CHANGE_SORT:
      return {
        ...state,
        sorted: action.sort,
      };
    case FETCH_POST_ANSWER:
      return {
        ...state,
      };
    case CHANGE_ANSWER_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case INCREMENT_COUNTER_ANSWER:
      return {
        ...state,
        vote: 'upVote',
        votedAnswer: action.answerId,
      };
    case DECREMENT_COUNTER_ANSWER:
      return {
        ...state,
        vote: 'downVote',
        votedAnswer: action.answerId,
      };
    default:
      return state;
  }
};

export default answers;
