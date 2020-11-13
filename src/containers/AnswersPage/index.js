// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AnswersPage from 'src/components/AnswersPage';

// Action Creators
import { fetchPostAnswer } from 'src/actions/answers';


const mapStateToProps = (state) => ({
  questions: state.questions.list,
  clickedQuestionId: state.questions.clickedQuestionId,
  value: state.questions.content,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostAnswer: () => {
    dispatch(fetchPostAnswer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswersPage);
