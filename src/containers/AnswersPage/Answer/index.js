import { connect } from 'react-redux';

// == Import : local
import Answer from 'src/components/AnswersPage/Answer';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = () => ({
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Answer);
