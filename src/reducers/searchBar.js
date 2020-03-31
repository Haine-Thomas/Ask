import {
  CHANGE_SEARCH_VALUE,
} from 'src/actions/searchBar';

export const initialState = {
  searchValue: {},
};

// reducer = traducteur d'une intention/action vers une modification du state
const searchBar = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        searchValue: state.searchValue,
      };
    default:
      return state;
  }
};

export default searchBar;
