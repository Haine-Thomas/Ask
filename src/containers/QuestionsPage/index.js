// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import QuestionsPage from 'src/components/QuestionsPage';

// Action Creators
import { changeInputValue, fetchPostQuestion } from 'src/actions/questions';
import { setCurrentPage } from 'src/actions/pagination';

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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
