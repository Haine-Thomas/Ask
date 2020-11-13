
// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
import LoginForm from 'src/components/Nav/Settings/LoginForm';

// Action Creators
import { loginAction, changeValueLogin } from 'src/actions/login';
import { toggleOpen } from 'src/actions';

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: () => {
    dispatch(loginAction());
  },
  changeValue: (value, name) => {
    dispatch(changeValueLogin(value, name));
  },
  toggleForm: () => {
    dispatch(toggleOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
