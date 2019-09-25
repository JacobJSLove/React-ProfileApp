import moxios from "moxios";
import { testStore } from './../../utils';
import { fetchComments, postComment } from './../actions';
import jsonProfile from '../api/jsonProfile';

describe('Actions', () => {
    beforeEach(() => {
        moxios.install(jsonProfile);
    });

    afterEach(() => {
        moxios.uninstall(jsonProfile);
    });

    describe('fetchComments action', () => {
        it('Store is updated correctly', () => {

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

    describe('postComment action', () => {

        it('Store is updated with post action -> postComment', () => {
            // Should be with post request
            const initialState = {
                comments: [{
                        userId: 10,
                        id: 96,
                        title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi',
                        body: 'in non oditus aut'
                    },
                    {
                        userId: 4,
                        id: 32,
                        title: 'doloremque illum aliquid sunt',
                        body: 'deseluptas maxime'
                    }
                ]
            };

            const store = testStore(initialState);
            const comment = { comment: "abc" };

            store.dispatch(postComment(comment));
            const newState = store.getState();
            expect(newState.comments).toMatchObject([{
                id: 101,
                title: 'abc',
                userId: 1
            }, ...initialState.comments]);


        });
    });
});