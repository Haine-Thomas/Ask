// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Counter from 'src/components/AnswersPage/Answer/Counter';

// Action Creators
import { fetchAnswerScore, incrementAnswer, decrementAnswer } from 'src/actions/answers';

const mapStateToProps = (state) => ({
  userId: state.login.user.id,
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  incrementAnswer: (answerId) => {
    dispatch(incrementAnswer(answerId));
  },
  decrementAnswer: (answerId) => {
    dispatch(decrementAnswer(answerId));
  },
  fetchAnswerScore: () => {
    dispatch(fetchAnswerScore());
  },
});


// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
 
