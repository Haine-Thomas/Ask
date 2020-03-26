// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignIn from 'src/components/SignIn';

// Action Creators
import { changeValue, changeCheckbox, fetchSignInUser, verifyCallback } from 'src/actions/signIn';

/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  signIn: state.signIn,
});

/* === Actions modification ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
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
  verifyCallback: (response) => {
    dispatch(verifyCallback(response));
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
