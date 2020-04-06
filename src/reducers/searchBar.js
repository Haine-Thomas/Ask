import {
  CHANGE_SEARCH_VALUE,
  SEARCH_QUESTION,
  RESET_VALUE,
} from 'src/actions/searchBar';

export const initialState = {
  searchValue: {
    value: '',
  },
  searchedQuestion: '',
};

// reducer = traducteur d'une intention/action vers une modification du state
const searchBar = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case SEARCH_QUESTION:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        searchedQuestion: action.value,
      };
    case RESET_VALUE:
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        searchValue: { value: '' },
      };
    default:
      return state;
  }
};

export default searchBar;
