// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PasswordRecover from 'src/components/PasswordRecover';

// Action Creators
import {
  changeValue,
  sendRecoverEmail,
} from 'src/actions/passwordRecover';


const mapStateToProps = (state) => ({
  passwordRecover: state.passwordRecover.value,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value) => {
    dispatch(changeValue(value));
  },
  sendRecoverEmail: () => {
    dispatch(sendRecoverEmail());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecover);
