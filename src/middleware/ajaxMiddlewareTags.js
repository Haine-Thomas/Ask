import axios from 'axios';

import { FETCH_TAGS, saveTags } from 'src/actions/tags';

const ajaxMiddlewareTags = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TAGS:
      axios.get('http://localhost:3000/tags')
        .then((response) => {
          store.dispatch(saveTags(response.data.tags));
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default ajaxMiddlewareTags;
