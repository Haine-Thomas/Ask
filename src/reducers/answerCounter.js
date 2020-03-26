import { INCREMENT_ANSWERCOUNTER, DECREMENT_ANSWERCOUNTER } from 'src/actions/AnswerCounter';

const initialState = {
  name: 'The Counter',
  value: 0,
};
// reducer = traducteur d'une intention/action vers une modification du state
const answerCounter = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT_ANSWERCOUNTER:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
       // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT_ANSWERCOUNTER:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
       // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default answerCounter;
