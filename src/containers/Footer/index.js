// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from 'src/components/Footer';

// Action Creators
import { toggleOpenModal } from 'src/actions/footer';


/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  footer: state.footer,
  open: state.signIn.open,
});

/* === Actions modification ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  toggleOpenModal: () => {
    dispatch(toggleOpenModal());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
