import axios from 'axios';
import swan from 'sweetalert';
import { FETCH_QUESTIONS, saveQuestions, fetchQuestions, FETCH_POST_QUESTION } from 'src/actions/questions';

const ajaxQuestionMiddleware = (store) => (next) => (action) => {
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
    case FETCH_POST_QUESTION: {
      const state = store.getState();
      console.log(state);
      axios.post('http://localhost:3000/question', {
        content: state.questions.content,
        tagId: state.questions.tagId,
      }, { withCredentials: true })
        .then((response) => {
          // revenir a la fenetre précédente
          if (response.data.error) {
            swan(response.data.error, '', 'warning');
          }
          else {
            store.dispatch(fetchQuestions());
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

export default ajaxQuestionMiddleware;
