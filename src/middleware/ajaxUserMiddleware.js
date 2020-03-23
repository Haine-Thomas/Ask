import axios from 'axios';

import { FETCH_SIGNINUSER } from 'src/actions/signIn';

const ajaxUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SIGNINUSER: {
      const state = store.getState();
      console.log(state);
      axios.post('http://localhost:3000/inscription', {
        name: state.signIn.name,
        email: state.signIn.email,
        password: state.signIn.password,
        confirmPassword: state.signIn.confirmedPassword,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default ajaxUserMiddleware;
