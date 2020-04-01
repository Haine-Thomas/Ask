// == Import : npm
import { connect } from 'react-redux';

import Question from 'src/components/QuestionsPage/Question';

import { saveQuestionId, deleteQuestion } from 'src/actions/questions';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  userName: state.login.user.pseudo,
  questions: state.questions.list,
  userId: state.login.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  saveQuestionId: (id) => {
    dispatch(saveQuestionId(id));
  },
  deleteQuestion: (id) => {
    dispatch(deleteQuestion(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
