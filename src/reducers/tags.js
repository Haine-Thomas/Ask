
import { SAVE_TAGS } from 'src/actions/tags';

export const initialState = {
  list: [],
};

const tags = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TAGS:
      return {
        ...state,
        list: action.tags,
      };
    default:
      return state;
  }
};

export default tags;
