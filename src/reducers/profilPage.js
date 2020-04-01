import { TOGGLE_OPEN_MODAL } from 'src/actions/profilPage';

export const initialState = {
  open: false,
};

const profilPage = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN_MODAL:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default profilPage;
