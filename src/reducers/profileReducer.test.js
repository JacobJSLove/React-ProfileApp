import {
    FETCH_PROFILE
} from '../actions/types';
import profileReducer from './profileReducer';

describe('FETCH PROFILE Reducer', () => {
    it('Should return default state', () => {
        const newState = profileReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should response with new state in array', () => {
        const fakeResponse = {
            id: 1,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io'
        };
        const newState = profileReducer(undefined, {
            type: FETCH_PROFILE,
            payload: fakeResponse
        });
        expect(newState).toEqual([fakeResponse]);
    });


});