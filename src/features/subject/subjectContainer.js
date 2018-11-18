import Subject from './subject.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return state.subject
}
  
export default connect(mapStateToProps)(Subject);