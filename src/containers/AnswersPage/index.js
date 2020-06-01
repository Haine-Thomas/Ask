// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AnswersPage from 'src/components/AnswersPage';

// Action Creators
import { fetchPostAnswer } from 'src/actions/answers';

/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  questions: state.questions.list,
  clickedQuestionId: state.questions.clickedQuestionId,
  value: state.questions.content,
});

/* === Actions modification===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  fetchPostAnswer: () => {
    dispatch(fetchPostAnswer());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(AnswersPage);
