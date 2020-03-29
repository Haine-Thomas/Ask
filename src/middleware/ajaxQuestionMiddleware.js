// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import swan from 'sweetalert';
import {
  FETCH_QUESTIONS,
  saveQuestions,
  fetchQuestions,
  FETCH_POST_QUESTION,
} from 'src/actions/questions';

const ajaxQuestionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // + on traduit l'intention en intérrogeant notre API
    // je vais avoir besoin de lire le state pour faire ma requete
    case FETCH_QUESTIONS: {
      const state = store.getState();
      axios.get(`http://localhost:3000/question/${state.questions.sorted}`)
        .then((response) => {
          // quand on a la réponse, on veut modifier le pseudo dans l'état
          // je vais vouloir émettre une intention pour modifier le state
          store.dispatch(saveQuestions(response.data.questions));
        })
        .catch((error) => {
          console.error(error);
        });
      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    case FETCH_POST_QUESTION: {
      const state = store.getState();
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
