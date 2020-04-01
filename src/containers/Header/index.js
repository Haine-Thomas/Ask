// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Header);
