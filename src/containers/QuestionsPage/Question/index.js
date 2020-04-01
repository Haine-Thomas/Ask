// == Import : npm
import { connect } from 'react-redux';

import Question from 'src/components/QuestionsPage/Question';

import { saveQuestionId } from 'src/actions/questions';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  userName: state.login.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  saveQuestionId: (id) => {
    dispatch(saveQuestionId(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
