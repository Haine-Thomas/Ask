// == Import : npm
import { connect } from 'react-redux';

// == Imports locaux
import Question from 'src/components/QuestionsPage/Question';

// Action Creators
import { saveQuestionId, deleteQuestion, fetchDeleteQuestion } from 'src/actions/questions';

/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  userName: state.login.user.pseudo,
  questions: state.questions.list,
  userId: state.login.user.id,
});

/* === Actions modification===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  saveQuestionId: (id) => {
    dispatch(saveQuestionId(id));
  },
  deleteQuestion: (id) => {
    dispatch(deleteQuestion(id));
  },
  fetchDeleteQuestion: (id) => {
    dispatch(fetchDeleteQuestion(id));
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Question);
