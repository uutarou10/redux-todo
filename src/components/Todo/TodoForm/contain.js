import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add } from '../../../actions/todo'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    add
  },dispatch);
};

export default connect(null,mapDispatchToProps);
