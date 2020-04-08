// eslint-disable-next-line import/no-unresolved
import axios from 'axios';

import { FETCH_TAGS, saveTags } from 'src/actions/tags';

const ajaxMiddlewareTags = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TAGS:
      // + on traduit l'intention en intérrogeant notre API
      // je vais avoir besoin de lire le state pour faire ma requete
      axios.get(`http://54.162.97.41:3000/tags`)
        .then((response) => {
          // quand on a la réponse, on veut modifier le pseudo dans l'état
          // je vais vouloir émettre une intention pour modifier le state
          store.dispatch(saveTags(response.data.tags));
        })
        .catch((error) => {
          console.error(error);
        });
      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    default:
      next(action);
  }
};

export default ajaxMiddlewareTags;
