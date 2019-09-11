// letter for navi
//import history from '../history';
import jsonProfile from '../api/jsonProfile';
import _ from 'lodash';
import {
    FETCH_PROFILE,
    FETCH_COMMENTS
} from './types';



export const fetchCommentsAndUsers = () => async (dispatch, getState) => {
    // Call fetchComments
    await dispatch(fetchComments());
    // Call fetchUser
    _.chain(getState().comments)
        .map('userId') // map users
        .uniq() // only uniqe users
        .forEach(id => dispatch(fetchProfile(id))) // call fetch to uniq users
        .value(); // Start chain
};



export const fetchProfile = (id) => async dispatch => {
    const response = await jsonProfile.get(`/users/${id}`);

    dispatch({
        type: FETCH_PROFILE,
        payload: response.data
    });
};

// to delete for experiment
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


export const fetchComments = () => async dispatch => {
    const response = await jsonProfile.get('/posts');

    dispatch({
        type: FETCH_COMMENTS,
        payload: shuffle(response.data)
    });
};