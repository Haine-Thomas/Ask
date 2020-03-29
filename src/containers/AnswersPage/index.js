// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AnswersPage from 'src/components/AnswersPage';
import { fetchPostAnswer } from 'src/actions/answers';

const mapStateToProps = (state) => ({
  questions: state.questions.list,
  clickedQuestionId: state.questions.clickedQuestionId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostAnswer: () => {
    dispatch(fetchPostAnswer());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(AnswersPage);
