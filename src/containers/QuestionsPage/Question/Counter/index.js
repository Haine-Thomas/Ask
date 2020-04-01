// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Counter from 'src/components/QuestionsPage/Question/Counter';


// Action Creators
import { increment, decrement, fetchQuestionScore } from 'src/actions/questions';

/* === State (données) lecture ===
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

/* === Actions modification ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
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


// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
