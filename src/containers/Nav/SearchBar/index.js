// == Imports NPM
import { connect } from 'react-redux';
import { changeSearchValue, searchQuestion, resetValue } from 'src/actions/searchBar';

// == Imports locaux
// composant + actions creator
import SearchBar from 'src/components/Nav/SearchBar';

/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  questions: state.questions.list,
  value: state.searchBar.searchValue.value,
});

/* === Actions modification===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  changeSearchValue: (value) => {
    dispatch(changeSearchValue(value));
  },
  searchQuestion: (value) => {
    dispatch(searchQuestion(value));
  },

  resetValue: () => {
    dispatch(resetValue());
  },

});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
