// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Question from 'src/components/QuestionsPage/Question';


/* === State (données) lecture===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  userName: state.login.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({


});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Question);
