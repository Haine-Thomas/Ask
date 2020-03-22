import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchQuestions } from 'src/actions/questions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => {
    dispatch(fetchQuestions());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
