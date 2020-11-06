import axios from 'axios';
// swal permet de customiser une ptite fonction alert bien sympa
import swal from 'sweetalert';
import {
  FETCH_ANSWERS,
  saveAnswers,
  FETCH_POST_ANSWER,
  FETCH_ANSWER_SCORE,
  FETCH_DELETE_ANSWER,
} from 'src/actions/answers';

import { fetchQuestions } from 'src/actions/questions';
const url = 'http://ec2-15-237-52-213.eu-west-3.compute.amazonaws.com';

const ajaxAnswerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DELETE_ANSWER: {
      const state = store.getState();
      const questionId = state.answer.answerToDelete;
      axios.delete(`${url}:3000/answer/${questionId}`, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchQuestions());
          swal('Réponse supprimée!', '', 'success');

        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    // + on traduit l'intention en intérrogeant notre API
    // je vais avoir besoin de lire le state pour faire ma requete
    case FETCH_ANSWERS: {
      const state = store.getState();
      axios.get(`${url}:3000/question/:id/answers${state.answers.sorted}`)
        .then((response) => {
          // quand on a la réponse, on veut modifier la réponse dans l'état
          // je vais vouloir émettre une intention pour modifier le state
          store.dispatch(saveAnswers(response.data.answers));
        })
        .catch((error) => {
          console.error(error);
        });
      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    case FETCH_POST_ANSWER: {
      const state = store.getState();
      const questionId = state.questions.clickedQuestionId;
      axios.post(`${url}:3000/question/${questionId}/answer`, {
        content: state.answer.value,
      }, { withCredentials: true })
        .then((response) => {
          // revenir a la fenetre précédente
          if (response.data.error) {
            swal(response.data.error, '', 'warning');
          }
          else {
            swal('Réponse postée!', '', 'success');
            store.dispatch(saveAnswers());
            store.dispatch(fetchQuestions());
          }
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    case FETCH_ANSWER_SCORE: {
      const state = store.getState();
      const { vote, votedAnswer } = state.answer;
      axios.patch(`${url}:3000/answer/${votedAnswer}/${vote}`, {}, { withCredentials: true })
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

export default ajaxAnswerMiddleware;
