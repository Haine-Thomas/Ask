import { connect } from 'react-redux';

import QuestionsPage from 'src/components/QuestionsPage';

const mapStateToProps = (state) => ({
  questions: state.questions.list,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
