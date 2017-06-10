import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { toggleComplete } from '../../../actions/todo';
import { getTodo } from '../../../reducers/todo';

const mapStateToProps = (state) => {
  return {
    todo: getTodo(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleComplete,
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps);
