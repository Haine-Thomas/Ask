// == Imports NPM
import { connect } from 'react-redux';
import { resetQuestion } from 'src/actions/searchBar';

// == Imports locaux
// composant + actions creator
import Nav from 'src/components/Nav';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  resetQuestion: () => {
    dispatch(resetQuestion());
  },

});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
