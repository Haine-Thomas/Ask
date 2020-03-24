import { connect } from 'react-redux';

import QuestionsPage from 'src/components/QuestionsPage';

const mapStateToProps = (state) => ({
  questions: state.questions.list,
  isLogged: state.login.isLogged,
  tags: state.tags.list,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
