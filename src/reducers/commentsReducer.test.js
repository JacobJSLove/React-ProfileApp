import {
    FETCH_COMMENTS,
    POST_COMMENT
} from '../actions/types';
import commentsReducer from './commentsReducer';

describe('Comments Reducer', () => {
    it('Should return default state', () => {
        const newState = commentsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    describe('Case Fetch Comments', () => {
        it('Should response with new state in array', () => {
            const fakeResponse = [{
                    userId: 8,
                    id: 76,
                    title: 'doloremque officiis ad et non perferendis',
                    body: 'ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio'
                },
                {
                    userId: 5,
                    id: 49,
                    title: 'laborum non sunt aut ut assumenda perspiciatis voluptas',
                    body: 'inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut'
                },
                {
                    userId: 2,
                    id: 15,
                    title: 'eveniet quod temporibus',
                    body: 'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae'
                }
            ];
            const fakeState = [{
                userId: 7,
                id: 70,
                title: 'voluptatem laborum magni',
                body: 'sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore'
            }];
            const newState = commentsReducer(fakeState, {
                type: FETCH_COMMENTS,
                payload: fakeResponse
            });
            expect(newState).toEqual([...fakeState, ...fakeResponse]);
        });
    });

    describe('Case Post Comments', () => {
        it('Should response with new state in array', () => {
            const fakeComment = {
                comment: 'doloremque officiis ad et non perferendis'
            };
            const fakeState = [{
                    userId: 8,
                    id: 76,
                    title: 'doloremque officiis ad et non perferendis',
                    body: 'ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio'
                },
                {
                    userId: 5,
                    id: 49,
                    title: 'laborum non sunt aut ut assumenda perspiciatis voluptas',
                    body: 'inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut'
                },
                {
                    userId: 2,
                    id: 15,
                    title: 'eveniet quod temporibus',
                    body: 'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae'
                }
            ];

            const newState = commentsReducer(fakeState, {
                type: POST_COMMENT,
                payload: fakeComment
            });
            expect(newState).toEqual([{
                id: 101,
                title: fakeComment.comment,
                userId: 1
            }, ...fakeState]);
        });

    });




});