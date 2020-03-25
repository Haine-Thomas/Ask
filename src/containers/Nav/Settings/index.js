// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Settings from 'src/components/Nav/Settings';

// Action Creators
import { toggleOpen } from 'src/actions';
import { disconnectAction } from 'src/actions/login';


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
});


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
