import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';
import { changeValue, changeCheckbox, fetchSignInUser } from 'src/actions/signIn';

const mapStateToProps = (state) => ({
  signIn: state.signIn,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
