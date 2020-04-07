// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
// swal permet de customiser une ptite fonction alert bien sympa
import swal from 'sweetalert';
import {
  FETCH_QUESTIONS,
  saveQuestions,
  fetchQuestions,
  FETCH_POST_QUESTION,
  FETCH_QUESTION_SCORE,
  FETCH_DELETE_QUESTION,
} from 'src/actions/questions';


const ajaxQuestionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DELETE_QUESTION: {
      const state = store.getState();
      const questionId = state.questions.questionToDelete;
      axios.delete(`http://54.162.97.41/question/${questionId}`, {
      }, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchQuestions());
          swal('Question supprimée!', '', 'success');

        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    // + on traduit l'intention en intérrogeant notre API
    // je vais avoir besoin de lire le state pour faire ma requete
    case FETCH_QUESTIONS: {
      const state = store.getState();
      axios.get(`http://54.162.97.41/question/${state.questions.sorted}`)
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
      axios.post(`http://54.162.97.41/question`, {
        content: state.questions.content,
        tagId: state.questions.tagId,
      }, { withCredentials: true })
        .then((response) => {
          // revenir a la fenetre précédente
          if (response.data.error) {
            swal(response.data.error, '', 'warning');
          }
          else {
            store.dispatch(fetchQuestions());
            swal('Question postée!', '', 'success');
          }
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    case FETCH_QUESTION_SCORE: {
      const state = store.getState();
      const { vote, votedQuestionId } = state.questions;
      axios.patch(`http://54.162.97.41/question/${votedQuestionId}/${vote}`, {
      }, {
        withCredentials: true,
      })
        .then((response) => {
          // revenir a la fenetre précédente
          if (response.data.error) {
            swal(response.data.error, '', 'warning');
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
