import { connect } from 'react-redux';

import SortButtons from 'src/components/AnswersPage/SortButtons';

import { changeSort } from 'src/actions/answers';


const mapStateToProps = (state) => ({
  sorted: state.answer.sorted,
});


const mapDispatchToProps = (dispatch) => ({
  changeSort: (sort) => {
    dispatch(changeSort(sort));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SortButtons);
