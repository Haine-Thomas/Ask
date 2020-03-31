import { connect } from 'react-redux';

// == Import : local
import Answer from 'src/components/AnswersPage/Answer';

import { saveAnswers, fetchPostAnswer, changeAnswerValue } from 'src/actions/answers';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  value: state.answer.value,
  sorted: state.answer.sorted,
});

const mapDispatchToProps = (dispatch) => ({
  saveAnswers: (QuestionId) => {
    dispatch(saveAnswers(QuestionId));
  },
  fetchPostAnswer: () => {
    dispatch(fetchPostAnswer());
  },
  changeAnswerValue: (value) => {
    dispatch(changeAnswerValue(value));
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Answer);
