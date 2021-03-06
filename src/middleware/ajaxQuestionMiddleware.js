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

const url = 'http://ec2-15-237-52-213.eu-west-3.compute.amazonaws.com';
const ajaxQuestionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DELETE_QUESTION: {
      const state = store.getState();
      const questionId = state.questions.questionToDelete;
      axios.delete(`${url}:3000/question/${questionId}`, { withCredentials: true })
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

    case FETCH_QUESTIONS: {
      const state = store.getState();
      axios.get(`${url}:3000/question/${state.questions.sorted}`,{ withCredentials: true })
        .then((response) => {
          store.dispatch(saveQuestions(response.data.questions));
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    case FETCH_POST_QUESTION: {
      const state = store.getState();
      axios.post(`${url}:3000/question`, {
        content: state.questions.content,
        tagId: state.questions.tagId,
      }, { withCredentials: true })
        .then((response) => {
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
      axios.patch(`${url}:3000/question/${votedQuestionId}/${vote}`, {}, {
        withCredentials: true,
      })
        .then((response) => {
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
