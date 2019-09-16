import {
    FETCH_COMMENTS,
    POST_COMMENT
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            {
                return [...state, ...action.payload]
            }
        case POST_COMMENT:
            {
                return [{
                    body: action.payload.comment,
                    id: 101,
                    title: "aliquid eos sed fuga est maxime repellendus",
                    userId: 1
                }, ...state]
            }
        default:
            return state;
    }
};