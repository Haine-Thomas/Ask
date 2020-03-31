import {
  SAVE_ANSWERS,
  CHANGE_SORTED,
  FETCH_POST_ANSWER,
  CHANGE_ANSWER_VALUE,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from 'src/actions/answers';

export const initialState = {
  value: '',
  votedAnswer: 0,
  vote: '',
};

// reducer = traducteur d'une intention/action vers une modification du state
const answers = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ANSWERS:
      return {
        ...state,
        list: action.answers,
        value: '',
      };
    case CHANGE_SORTED:
      return {
        ...state,
        sorted: action.sorted,
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
    case INCREMENT_COUNTER:
      return {
        ...state,
        vote: 'upVote',
        votedAnswer: action.answerId,
      };
    case DECREMENT_COUNTER:
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
