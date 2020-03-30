// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AnswersPage from 'src/components/AnswersPage';
import { fetchPostAnswer, changeInputValue } from 'src/actions/answers';

const mapStateToProps = (state) => ({
  questions: state.questions.list,
  clickedQuestionId: state.questions.clickedQuestionId,
  value: state.questions.content,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInputValue(value, name));
  },
  fetchPostAnswer: () => {
    dispatch(fetchPostAnswer());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(AnswersPage);
