import { connect } from 'react-redux';

// == Import : local
import Question from 'src/components/QuestionsPage/Question';
import { deleteQuestion } from 'src/actions/questions';


/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  questionId: state.questions.list.id,
});

const mapDispatchToProps = (dispatch) => ({
  deleteQuestion: (id) => {
    dispatch(deleteQuestion(id));
  },
/* === Actions modification ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Question);
