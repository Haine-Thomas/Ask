// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignIn from 'src/components/SignIn';

// Action Creators
import {
  changeValue,
  changeCheckbox,
  fetchSignInUser,
  verifyCallback,
  expiredCallback,
  toggleOpenModal,
  resetIsVerified,
} from 'src/actions/signIn';

const mapStateToProps = (state) => ({
  signIn: state.signIn,
  open: state.signIn.open,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    dispatch(changeValue(value, name));
  },
  changeCheckbox: () => {
    dispatch(changeCheckbox());
  },
  fetchSignInUser: () => {
    dispatch(fetchSignInUser());
  },
  verifyCallback: (response) => {
    dispatch(verifyCallback(response));
  },
  expiredCallback: (response) => {
    dispatch(expiredCallback(response));
  },

  resetIsVerified: () => {
    dispatch(resetIsVerified());
  },

  toggleOpenModal: () => {
    dispatch(toggleOpenModal());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
