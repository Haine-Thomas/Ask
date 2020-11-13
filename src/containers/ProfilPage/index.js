// == Import : npm
import { connect } from 'react-redux';

// Action Creators
import { changeValue } from 'src/actions/signIn';
import { deleteUser, disconnectAction, modifyUser } from 'src/actions/login';
import { fetchQuestions } from 'src/actions/questions';
import { toggleOpenModal } from 'src/actions/profilPage';


// == Import : local
import ProfilPage from 'src/components/ProfilPage';

const mapStateToProps = (state) => ({
  userId: state.login.user.id,
  pseudo: state.login.user.pseudo,
  email: state.login.user.email,
  created_at: state.login.user.created_at,
  questions: state.questions.list,
  signIn: state.signIn,
  open: state.profilPage.open,

});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => {
    dispatch(deleteUser(id));
  },
  changeValue: (value, name) => {
    dispatch(changeValue(value, name));
  },

  disconnectAction: () => {
    dispatch(disconnectAction());
  },

  fetchQuestions: () => {
    dispatch(fetchQuestions());
  },

  modifyUser: (id) => {
    dispatch(modifyUser(id));
  },
  toggleOpenModal: () => {
    dispatch(toggleOpenModal());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilPage);
