import { connect } from 'react-redux';

import QuestionsPage from 'src/components/QuestionsPage';
import { changeInputValue, fetchPostQuestion } from 'src/actions/questions';


const mapStateToProps = (state) => ({
  questions: state.questions.list,
  isLogged: state.login.isLogged,
  tags: state.tags.list,
  value: state.questions.content,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInputValue(value, name));
  },
  fetchPostQuestion: () => {
    dispatch(fetchPostQuestion());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
