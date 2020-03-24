import axios from 'axios';
// swal permet de customiser une ptite fonction alert bien sympa
import swal from 'sweetalert';
import { FETCH_SIGNINUSER } from 'src/actions/signIn';

const ajaxUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SIGNINUSER: {
      const state = store.getState();
      axios.post('http://localhost:3000/inscription', {
        name: state.signIn.name,
        email: state.signIn.email,
        password: state.signIn.password,
        confirmPassword: state.signIn.confirmedPassword,
      })
        .then((response) => {
          //revenir a la fenetre précédente
          if (response.data.error) {
            swal(response.data.error);
          } else {
            swal('Inscription validée', '', 'success');
            setTimeout(function(){window.location='/retrieve'}, 3000);
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
