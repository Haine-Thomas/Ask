// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import VerifyPage from 'src/components/VerifyPage';

// Action Creators
import {
  changeTokenValue,
  resetTokenValue,
  activateUser,
} from 'src/actions/verifyPage';


const mapStateToProps = (state) => ({
  verifyPage: state.verifyPage.value,
});

const mapDispatchToProps = (dispatch) => ({
  changeTokenValue: (value) => {
    dispatch(changeTokenValue(value));
  },
  activateUser: () => {
    dispatch(activateUser());
  },

  resetTokenValue: () => {
    dispatch(resetTokenValue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPage);
