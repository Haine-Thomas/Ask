// == Import : npm
import { connect } from 'react-redux';

// == Imports locaux
import SortButtons from 'src/components/Nav/SortButtons';

// Action Creators
import { changeSorted, fetchQuestions } from 'src/actions/questions';

/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  sorted: state.questions.sorted,
});

/* === Actions modification===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  changeSorted: (sorted) => {
    dispatch(changeSorted(sorted));
  },
  fetchQuestions: () => {
    dispatch(fetchQuestions());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(SortButtons);
