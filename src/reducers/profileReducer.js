import {
    FETCH_PROFILE
} from '../actions/types';

// could be better array
// [id of responded profile: {respond object}]
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_PROFILE:
            {
                return [...state, action.payload];
            }
        default:
            return state;
    }
}