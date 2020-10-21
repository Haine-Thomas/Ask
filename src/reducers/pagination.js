import { SET_CURRENT_PAGE } from 'src/actions/pagination';

export const initialState = {
  currentPage: 1,
  postsPerPage: 5,
};

const pagination = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.value,
      };
    default:
      return state;
  }
};

export default pagination;
