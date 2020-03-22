import { TOGGLE_OPEN } from 'src/actions';

const initialState = {
  open: false,
  isLogged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default reducer;
