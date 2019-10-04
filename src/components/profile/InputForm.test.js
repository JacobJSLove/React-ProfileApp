import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from './../../utils';

import InputForm from './InputForm';


const setUp = (initialState = {}, props = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<InputForm store={store} {...props} />).dive();
    return wrapper;
};

describe('InputForm Component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            form: {
                commentForm: {
                    values: {
                        placeholder: 'Add a comment',
                        comment: 'abc'
                    },
                    initial: {
                        placeholder: 'Add a comment'
                    },
                    registeredFields: {
                        comment: {
                            name: 'comment',
                            type: 'Field',
                            count: 1
                        }
                    },
                    fields: {
                        comment: {
                            visited: true,
                            touched: true
                        }
                    },
                    anyTouched: true
                }
            }
        };
        const props = {};
        wrapper = setUp(initialState, props);
    });
    describe('Renders', () => {
        it('Renders without errors', () => {
            const component = findByTestAtrr(wrapper, 'inputForm');
            expect(component.length).toBe(1);
        })

    });

});