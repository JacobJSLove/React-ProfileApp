import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import profileReducer from './profileReducer';


export default combineReducers({
    profile: profileReducer
});