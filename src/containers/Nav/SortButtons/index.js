// == Import : npm
import { connect } from 'react-redux';

// == Imports locaux
import SortButtons from 'src/components/Nav/SortButtons';

// Action Creators
import { changeSorted, fetchQuestions } from 'src/actions/questions';

const mapStateToProps = (state) => ({
  sorted: state.questions.sorted,
});

const mapDispatchToProps = (dispatch) => ({
  changeSorted: (sorted) => {
    dispatch(changeSorted(sorted));
  },
  fetchQuestions: () => {
    dispatch(fetchQuestions());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortButtons);
