import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchQuestions } from 'src/actions/questions';
import { fetchTags } from 'src/actions/tags';

const mapStateToProps = (state) => ({
  list: state.questions.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => {
    dispatch(fetchQuestions());
  },
  fetchTags: () => {
    dispatch(fetchTags());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
