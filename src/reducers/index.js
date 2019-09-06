import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';



// Remove
const initialReducer = (state = [], action) => {
    return state
}


export default combineReducers({
    initialReducer
});