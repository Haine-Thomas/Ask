import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'src/actions';

const initialState = {
  name: 'The Counter',
  value: 0,
};
// reducer = traducteur d'une intention/action vers une modification du state
const counter = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT_COUNTER:
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

export default counter;
