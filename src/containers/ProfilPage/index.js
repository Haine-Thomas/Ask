// == Import : npm
import { connect } from 'react-redux';

// Action Creators
import { changeValue } from 'src/actions/signIn';
import { deleteUser, disconnectAction, modifyUser } from 'src/actions/login';
import { fetchQuestions } from 'src/actions/questions';
import { toggleOpenModal } from 'src/actions/profilPage';


// == Import : local
import ProfilPage from 'src/components/ProfilPage';

/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  userId: state.login.user.id,
  pseudo: state.login.user.pseudo,
  email: state.login.user.email,
  created_at: state.login.user.created_at,
  questions: state.questions.list,
  signIn: state.signIn,
  open: state.profilPage.open,

});

/* === Actions modification ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
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

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(ProfilPage);
