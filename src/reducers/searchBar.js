import {
  CHANGE_SEARCH_VALUE,
} from 'src/actions/searchBar';

export const initialState = {
  searchValue: '',
};

// reducer = traducteur d'une intention/action vers une modification du state
const searchBar = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };

    default:
      return state;
  }
};

export default searchBar;
