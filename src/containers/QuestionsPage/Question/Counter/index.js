// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Counter from 'src/components/QuestionsPage/Question/Counter';


// Action Creators
import { increment, decrement, fetchQuestionScore } from 'src/actions/questions';

const mapStateToProps = (state) => ({
  userId: state.login.user.id,
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (questionId) => {
    dispatch(increment(questionId));
  },
  decrement: (questionId) => {
    dispatch(decrement(questionId));
  },
  fetchQuestionScore: () => {
    dispatch(fetchQuestionScore());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
