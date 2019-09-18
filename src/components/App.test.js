import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import App from './App';



describe('App Component', () => {
    it('App renders without crashing', () => {
        shallow(<App />);
    });
});