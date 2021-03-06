// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Settings from 'src/components/Nav/Settings';

// Action Creators
import { toggleOpen } from 'src/actions';
import { disconnectAction } from 'src/actions/login';
import { resetIsVerified } from 'src/actions/signIn';

const mapStateToProps = (state) => ({
  open: state.login.open,
  user: state.login.user.pseudo,
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  toggleForm: () => {
    dispatch(toggleOpen());
  },
  disconnectAction: () => {
    dispatch(disconnectAction());
  },
  resetIsVerified: () => {
    dispatch(resetIsVerified());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
