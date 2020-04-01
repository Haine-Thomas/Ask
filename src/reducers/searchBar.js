import {
  CHANGE_SEARCH_VALUE,
  SEARCH_QUESTION,
} from 'src/actions/searchBar';

export const initialState = {
  searchValue: '',
  searchedQuestion: '',
};

// reducer = traducteur d'une intention/action vers une modification du state
const searchBar = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case SEARCH_QUESTION:
      return {
        ...state,
        searchedQuestion: action.value,
      };
    default:
      return state;
  }
};

export default searchBar;
