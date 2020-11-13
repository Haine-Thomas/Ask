// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import swan from 'sweetalert';
import {
  LOGIN_ACTION,
  DISCONNECT_ACTION,
  changeUser,
  DELETE_USER,
  MODIFY_USER,
} from 'src/actions/login';
import { changeValue } from 'src/actions/signIn';

const url = 'http://ec2-15-237-52-213.eu-west-3.compute.amazonaws.com';
const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_USER: {
      const state = store.getState();
      axios.delete(`${url}:3000/user/${state.login.user.id}`, {
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOGIN_ACTION: {
      const state = store.getState();
      axios.post(`${url}:3000/login`, {
        email: state.login.user.email,
        password: state.login.user.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          if (response.data.error) {
            swan(response.data.error, '', 'warning');
          }
          else {
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
      axios.get(`${url}:3000/disconnect`, {
        withCredentials: true,
      })
        .then((response) => {
          swan(response.data.message, '', 'success', {
          });
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case MODIFY_USER: {
      const state = store.getState();
      const userid = state.login.user.id;
      axios.patch(`${url}:3000/user/${userid}`, {
        email: state.signIn.email,
        password: state.signIn.password,
        confirmPassword: state.signIn.confirmedPassword,
      }, { withCredentials: true })
        .then((response) => {
          if (response.data.error) {
            swan(response.data.error, '', 'warning');
          }
          else {
            store.dispatch(changeValue(response.data));
            if (response.data) {
              swan('Vos modifications ont bien été pris en compte', 'N"oubliez pas de vous reconnecter pour voir les changements', 'success');
            }
          }
        })
        .catch((error) => {
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default logMiddleware;
