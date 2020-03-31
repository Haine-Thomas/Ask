import axios from 'axios';
import swan from 'sweetalert';
import { LOGIN_ACTION, DISCONNECT_ACTION, changeUser, CHECK_IS_LOGGED } from 'src/actions/login';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      // + on traduit l'intention en intérrogeant notre API
      // je vais avoir besoin de lire le state pour faire ma requete
      const state = store.getState();
      axios.post('http://localhost:3000/login', {
        email: state.login.user.email,
        password: state.login.user.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          // quand on a la réponse, on veut modifier le pseudo dans l'état
          // je vais vouloir émettre une intention pour modifier le state
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
      // + on traduit l'intention en intérrogeant notre API
      // je vais avoir besoin de lire le state pour faire ma requete
      axios.get('http://localhost:3000/disconnect', {}, {
        withCredentials: true,
      })
        .then((response) => {
          swan(response.data.message, '', 'success', {
          });
          // quand on a la réponse, on veut modifier le pseudo dans l'état
          // je vais vouloir émettre une intention pour modifier le state
          console.log(response.data);
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
