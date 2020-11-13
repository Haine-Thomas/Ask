// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import { fetchQuestions } from 'src/actions/questions';
import { fetchTags } from 'src/actions/tags';
import { resetPasswordRebootValue } from 'src/actions/rebootPassword';

const mapStateToProps = (state) => ({
  list: state.questions.list,
  vote: state.questions.vote,
  votedQuestion: state.questions.votedQuestionId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => {
    dispatch(fetchQuestions());
  },
  fetchTags: () => {
    dispatch(fetchTags());
  },
  resetPasswordRebootValue: () => {
    dispatch(resetPasswordRebootValue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
