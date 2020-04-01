// == Imports NPM
import { connect } from 'react-redux';
import { changeSearchValue, searchQuestion } from 'src/actions/searchBar';

// == Imports locaux
// composant + actions creator
import SearchBar from 'src/components/Nav/SearchBar';


const mapStateToProps = (state) => ({
  questions: state.questions.list,
  value: state.searchBar.searchValue.value,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchValue: (value) => {
    dispatch(changeSearchValue(value));
  },
  searchQuestion: (value) => {
    dispatch(searchQuestion(value));
  },

});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
