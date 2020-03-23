import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';
import { changeValue, changeCheckbox } from 'src/actions/signIn';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
