// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
// swal permet de customiser une ptite fonction alert bien sympa
// eslint-disable-next-line import/no-unresolved
import swal from 'sweetalert';
import { FETCH_SIGNINUSER} from 'src/actions/signIn';
import { ACTIVATE_USER } from 'src/actions/verifyPage';
import { SEND_RECOVER_EMAIL, storeUserEmail } from 'src/actions/passwordRecover';
import { REBOOT_PASSWORD } from 'src/actions/rebootPassword';

const url = 'http://15.237.116.91';

const ajaxUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SIGNINUSER: {
      // + on traduit l'intention en intérrogeant notre API
      // je vais avoir besoin de lire le state pour faire ma requete
      const state = store.getState();
      axios.post(`${url}:3000/inscription`, {
        name: state.signIn.name,
        email: state.signIn.email,
        password: state.signIn.password,
        confirmPassword: state.signIn.confirmedPassword,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          if (response.data.error) {
            swal(response.data.error, '', 'warning');
          }
          else {
            swal(response.data.message, '', 'success', {
              buttons: false,
            });
            setTimeout(function(){window.location ='/'}, 3000);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    case ACTIVATE_USER: {
      const state = store.getState();
      axios.post('http://localhost:3000/user/verify', {
        formToken: state.verifyPage.value,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          if (response.data.error) {
            swal(response.data.error, '', 'warning');
          }
          else {
            swal(response.data.message, 'Vous pouvez fermer cette page', '', {
              buttons: false,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }

    case REBOOT_PASSWORD: {
      const state = store.getState();
      const email = state.passwordRecover.user.email;
      axios.patch(`http://localhost:3000/user/${email}/rebootPassword`, {
        email: state.passwordRecover.user.email,
        password: state.rebootPassword.password,
        confirmPassword: state.rebootPassword.confirmPassword,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          if (response.data.error) {
            swal(response.data.error, '', 'warning');
          } else if (response.data.message === 'Les deux champs de mot de passe ne correspondent pas') {
            swal(response.data.message, '', 'warning', {
            });
          } else {
            swal(response.data.message, '', 'success', {
              buttons: false,
            });
            setTimeout(function(){window.location ='/'}, 3000);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }

    case SEND_RECOVER_EMAIL: {
      const state = store.getState();
      axios.post('http://localhost:3000/user/sendRecoverEmail', {
        email: state.passwordRecover.value,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          if (response.data.error) {
            swal(response.data.error, '', 'warning');
          }
          else if (response.data.message === 'Cet email ne correspond à aucun compte') {
            swal(response.data.message, '', 'warning', {
            });
          } else {
            swal(response.data.message, '', 'success', {
              buttons: false,
            });
            store.dispatch(storeUserEmail(response.data.user));
            setTimeout(function(){window.location ='/'}, 3000);
          }
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
