// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import QuestionsPage from 'src/components/QuestionsPage';

// Action Creators
import { changeInputValue, fetchPostQuestion } from 'src/actions/questions';
import { setCurrentPage } from 'src/actions/pagination';

/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  questions: state.questions.list,
  isLogged: state.login.isLogged,
  tags: state.tags.list,
  value: state.questions.content,
  searchedQuestion: state.searchBar.searchedQuestion,
  liveSearch: state.searchBar.searchValue.value,
  currentPage: state.pagination.currentPage,
  postsPerPage: state.pagination.postsPerPage,
});

/* === Actions modification ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInputValue(value, name));
  },
  fetchPostQuestion: () => {
    dispatch(fetchPostQuestion());
  },
  setCurrentPage: (value) => {
    dispatch(setCurrentPage(value));
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
