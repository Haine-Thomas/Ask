// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Counter from 'src/components/AnswersPage/Answer/Counter';

// Action Creators
import { fetchAnswerScore, incrementAnswer, decrementAnswer } from 'src/actions/answers';

/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  userId: state.login.user.id,
  isLogged: state.login.isLogged,
});

/* === Actions modification===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
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
 
