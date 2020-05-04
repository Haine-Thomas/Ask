import {
  CHANGE_VALUE,
} from 'src/actions/passwordRecover';

export const initialState = {
  value: '',
};

const passwordRecover = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export default passwordRecover;
