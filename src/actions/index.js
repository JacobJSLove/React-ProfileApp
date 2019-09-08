import jsonProfile from '../api/jsonProfile';
import history from '../history';
import {
    FETCH_PROFILE,
} from './types';

export const fetchProfile = (id) => async dispatch => {
    const response = await jsonProfile.get(`/users/${id}`);

    dispatch({
        type: FETCH_PROFILE,
        payload: response.data
    });
};