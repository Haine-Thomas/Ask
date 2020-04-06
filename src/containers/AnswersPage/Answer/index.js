// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Answer from 'src/components/AnswersPage/Answer';

// Action Creators
import {
  saveAnswers,
  fetchPostAnswer,
  changeAnswerValue,
  deleteAnswer,
  fetchDeleteAnswer,
} from 'src/actions/answers';

/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  value: state.answer.value,
  sorted: state.answer.sorted,
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
  saveAnswers: (QuestionId) => {
    dispatch(saveAnswers(QuestionId));
  },
  fetchPostAnswer: () => {
    dispatch(fetchPostAnswer());
  },
  changeAnswerValue: (value) => {
    dispatch(changeAnswerValue(value));
  },
  deleteAnswer: (id) => {
    dispatch(deleteAnswer(id));
  },
  fetchDeleteAnswer: () => {
    dispatch(fetchDeleteAnswer());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Answer);
