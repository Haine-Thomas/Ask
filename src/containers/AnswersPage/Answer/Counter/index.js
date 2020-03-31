// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Counter from 'src/components/AnswersPage/Answer/Counter';

// Action Creators
import { fetchAnswerScore, increment, decrement } from 'src/actions/answers';

const mapStateToProps = (state) => ({
  userId: state.login.user.id,
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (answerId) => {
    dispatch(increment(answerId));
  },
  decrement: (answerId) => {
    dispatch(decrement(answerId));
  },
  fetchAnswerScore: () => {
    dispatch(fetchAnswerScore());
  },
});


// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Counter); 
