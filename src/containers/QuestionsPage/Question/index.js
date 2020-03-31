// == Import : npm
import { connect } from 'react-redux';

import Question from 'src/components/QuestionsPage/Question';

import { saveQuestionId } from 'src/actions/questions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  saveQuestionId: (id) => {
    dispatch(saveQuestionId(id));
  },
});


// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Question);
