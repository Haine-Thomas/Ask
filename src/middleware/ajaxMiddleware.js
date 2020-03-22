import axios from 'axios';

import { FETCH_QUESTIONS, saveQuestions } from 'src/actions/questions';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      axios.get('http://localhost:3000')
        .then((response) => {
          store.dispatch(saveQuestions(response.data.questions));
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

export default ajaxMiddleware;
