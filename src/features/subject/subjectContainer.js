import Subject from './Subject.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return state.subject
}
  
export default connect(mapStateToProps)(Subject);