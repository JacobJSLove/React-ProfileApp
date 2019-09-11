import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import commentsReducer from './commentsReducer';


export default combineReducers({
    profile: profileReducer,
    comments: commentsReducer
});