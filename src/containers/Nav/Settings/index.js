// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Settings from 'src/components/Nav/Settings';

// Action Creators
import { toggleOpen } from 'src/actions';


const mapStateToProps = (state) => ({
  open: state.login.open,
  isLogged: state.login.isLogged,
});


const mapDispatchToProps = (dispatch) => ({
  toggleForm: () => {
    dispatch(toggleOpen());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
