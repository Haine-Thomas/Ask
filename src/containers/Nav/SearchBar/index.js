// == Imports NPM
import { connect } from 'react-redux';
import { changeSearchValue, searchQuestion, resetValue } from 'src/actions/searchBar';

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

  resetValue: () => {
    dispatch(resetValue());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
