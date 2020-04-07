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

// reducer = traducteur d'une intention/action vers une modification du state
const answers = (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_ANSWER:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        answerToDelete: action.id,
      };
    case SAVE_ANSWERS:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        list: action.answers,
        value: '',
      };
    case CHANGE_SORT:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        sorted: action.sort,
      };
    case FETCH_POST_ANSWER:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
      };
    case CHANGE_ANSWER_VALUE:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        value: action.value,
      };
    case INCREMENT_COUNTER_ANSWER:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        vote: 'upVote',
        votedAnswer: action.answerId,
      };
    case DECREMENT_COUNTER_ANSWER:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
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
