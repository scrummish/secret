import { combineReducers } from 'redux';
import subject from './features/subject';

export default combineReducers({
    [subject.constants.NAME]: subject.reducer
});