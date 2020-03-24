import axios from 'axios';

import { LOGIN_ACTION, changeUser } from 'src/actions/login';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      const state = store.getState();
      axios.post('http://localhost:3000/login', {
        email: state.login.user.email,
        password: state.login.user.password,
      })
        .then((response) => {
          // quand on a la réponse, on veut modifier le pseudo dans l'état
          // je vais vouloir émettre une intention pour modifier le state
          console.log(response.data);
          store.dispatch(changeUser(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default logMiddleware;
