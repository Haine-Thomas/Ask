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
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case SEARCH_QUESTION:
      return {
        ...state,
        searchedQuestion: action.value,
      };
    case RESET_VALUE:
      return {
        ...state,
        searchValue: { value: '' },
      };
    default:
      return state;
  }
};

export default searchBar;
