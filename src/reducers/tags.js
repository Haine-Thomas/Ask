
import { SAVE_TAGS } from 'src/actions/tags';

export const initialState = {
  list: [],
};

// reducer = traducteur d'une intention/action vers une modification du state
const tags = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TAGS:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        list: action.tags,
      };
    default:
      return state;
  }
};

export default tags;
