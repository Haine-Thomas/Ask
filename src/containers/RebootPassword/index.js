// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import RebootPassword from 'src/components/RebootPassword';

// Action Creators
import {
  changeValue,
  resetPasswordRebootValue,
} from 'src/actions/rebootPassword';


const mapStateToProps = (state) => ({
  passwordValue: state.rebootPassword.password,
  confirmPasswordValue: state.rebootPassword.confirmPassword,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (passwordValue, passwordName) => {
    dispatch(changeValue(passwordValue, passwordName));
  },

  resetPasswordRebootValue:() => {
    dispatch(resetPasswordRebootValue());
  },
 
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(RebootPassword);
