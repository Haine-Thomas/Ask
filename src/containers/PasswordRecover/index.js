// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PasswordRecover from 'src/components/PasswordRecover';

// Action Creators
import {
  changeEmailValue,
  sendRecoverEmail,
  resetPasswordRecoverValue,
} from 'src/actions/passwordRecover';


const mapStateToProps = (state) => ({
  passwordRecover: state.passwordRecover.value,
});

const mapDispatchToProps = (dispatch) => ({
  changeEmailValue: (value) => {
    dispatch(changeEmailValue(value));
  },
  sendRecoverEmail: () => {
    dispatch(sendRecoverEmail());
  },
  resetPasswordRecoverValue: () => {
    dispatch(resetPasswordRecoverValue());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecover);
