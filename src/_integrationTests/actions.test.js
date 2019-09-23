import moxios from "moxios";
import { testStore } from './../../utils';
import { fetchComments } from './../actions';
import jsonProfile from '../api/jsonProfile';

describe('fetchComments action', () => {
    beforeEach(() => {
        moxios.install(jsonProfile);
    });

    afterEach(() => {
        moxios.uninstall(jsonProfile);
    });

    it('Store is updated correctly', () => {

        //         const expectedState = [{
        //     title: 'Example title 1',
        //     body: 'Some Text'
        // }];


        const expectedState = [{
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
        }, {
            id: 2,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
        }, {
            id: 3,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
        }, {
            id: 5,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
        }];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchComments())
            .then(() => {
                const newState = store.getState();
                expect(newState.comments).toMatchObject(expectedState)
            })

    });

});