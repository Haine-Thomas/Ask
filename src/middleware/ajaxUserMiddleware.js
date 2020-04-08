// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
// swal permet de customiser une ptite fonction alert bien sympa
// eslint-disable-next-line import/no-unresolved
import swal from 'sweetalert';
import { FETCH_SIGNINUSER } from 'src/actions/signIn';

const ajaxUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SIGNINUSER: {
      // + on traduit l'intention en intérrogeant notre API
      // je vais avoir besoin de lire le state pour faire ma requete
      const state = store.getState();
      axios.post(`http://54.162.97.41:3000/inscription`, {
        name: state.signIn.name,
        email: state.signIn.email,
        password: state.signIn.password,
        confirmPassword: state.signIn.confirmedPassword,
      })
        .then((response) => {
          // quand on a la réponse, on veut modifier le pseudo dans l'état
          // je vais vouloir émettre une intention pour modifier le state
          // revenir a la fenetre précédente
          if (response.data.error) {
            swal(response.data.error, '', 'warning');
          }
          else {
            swal('Inscription validée', '', 'success', {
              buttons: false,
            });
            setTimeout(function(){window.location ='/retrieve'}, 3000);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default ajaxUserMiddleware;
