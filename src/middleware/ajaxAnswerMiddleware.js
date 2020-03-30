import axios from 'axios';
import swal from 'sweetalert';
import { 
  FETCH_ANSWERS,
  fetchAnswers,
  saveAnswers,
  FETCH_POST_ANSWER,
  FETCH_ANSWER_SCORE,
} from 'src/actions/answers';

const ajaxAnswerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // + on traduit l'intention en intérrogeant notre API
    // je vais avoir besoin de lire le state pour faire ma requete
    case FETCH_ANSWERS: {
      const state = store.getState();
      axios.get(`http://localhost:3000/question/:id/answers${state.answers.sorted}`)
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
      axios.post('http://localhost:3000/question/:id/answer', {
        content: state.answers.content,
        tagId: state.answers.tagId,
      }, { withCredentials: true })
        .then((response) => {
          // revenir a la fenetre précédente
          if (response.data.error) {
            swal(response.data.error, '', 'warning');
          }
          else {
            store.dispatch(fetchAnswers());
            swal('Réponse postée!', '', 'success');
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
      const { vote, voteAnswer } = state.answers;
      axios.patch('http://localhost:3000/answer/:id/${votedAnswer}/${vote}', {
      }, { withCredentials: true })
        .then((response) => {
          // revenir a la fenetre précédente
          if (response.data.error) {
            swal(response.data.error, '', 'warning');
          }
          else {
            store.dispatch(fetchAnswers());
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
