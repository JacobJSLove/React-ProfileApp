import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from './../../../utils';

import ProfileSelf from './ProfileSelf';



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

});