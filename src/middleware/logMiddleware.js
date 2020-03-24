import axios from 'axios';
import swan from 'sweetalert';
import { LOGIN_ACTION, DISCONNECT_ACTION, changeUser } from 'src/actions/login';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      const state = store.getState();
      axios.post('http://localhost:3000/login', {
        email: state.login.user.email,
        password: state.login.user.password,
      })
        .then((response) => {
          if (response.data.error) {
            swan(response.data.error, '', 'warning');
          } else {
            store.dispatch(changeUser(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case DISCONNECT_ACTION: {
      axios.get('http://localhost:3000/disconnect')
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default logMiddleware;
