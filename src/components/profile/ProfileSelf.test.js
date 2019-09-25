import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from './../../../utils';

import ProfileSelf from './ProfileSelf';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<ProfileSelf store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('ProfileSelf Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning if profile is an object', () => {
            const expectedProps = {
                profile: { test: 'abc' }
            };
            const propsErr = checkProps(ProfileSelf, expectedProps);
            expect(propsErr).toBeUndefined();
        });

    });
    describe('Validating Component', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {
                profile: [{
                    id: 4,
                    name: 'Patricia Lebsack',
                    username: 'Karianne',
                    email: 'Julianne.OConner@kory.org',
                    address: {
                        street: 'Hoeger Mall',
                        suite: 'Apt. 692',
                        city: 'South Elvis'
                    }
                }]
            };
            wrapper = setUp(initialState);
        })


        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'profileComponent');
            expect(component.length).toBe(1);
        })
        it('Should render static likes without errors', () => {
            const component = findByTestAtrr(wrapper, 'socialLikes');
            expect(component.text()).toEqual('354');
        })
        it('On Click should update likes', () => {
            const button = findByTestAtrr(wrapper, 'onLike');
            button.simulate('click');
            expect(findByTestAtrr(wrapper, 'socialLikes').text()).toEqual('355');
        })

    });


});