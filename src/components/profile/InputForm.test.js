import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from './../../../utils';

import InputForm from './InputForm';


const setUp = (initialState = {}, props = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<InputForm store={store} {...props} />).dive();
    return wrapper;
};

describe('InputForm Component', () => {
    let wrapper;

    describe('Checking PropTypes', () => {
        beforeEach(() => {
            const initialState = {};
            wrapper = setUp(initialState);
        });
        it('Should not throw a warning ', () => {
            // const expectedProps = {
            //     profile: { test: 'abc' }
            // };
            // const propsErr = checkProps(InputForm, expectedProps);
            // expect(propsErr).toBeUndefined();
        });

    });

    describe('Renders', () => {
        beforeEach(() => {
            const initialState = {};
            const props = {};
            wrapper = setUp(initialState, props);
        });
        it('Should render input form', () => {
            const Input = findByTestAtrr(wrapper, 'InputComponent');
            expect(Input.length).toBe(1);
        })

    });

});