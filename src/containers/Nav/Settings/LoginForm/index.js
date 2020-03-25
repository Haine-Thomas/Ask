
// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import LoginForm from 'src/components/Nav/Settings/LoginForm';
import { loginAction, changeValueLogin } from 'src/actions/login';
import { toggleOpen } from 'src/actions';


/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  login: state.login,
});

/* === Actions modification===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
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

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
