import { connect } from 'react-redux';

// == Import : local
import Answer from 'src/components/AnswersPage/Answer';

import { saveAnswers } from 'src/actions/answers';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  saveAnswers: (QuestionId) => {
    dispatch(saveAnswers(QuestionId));
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Answer);
