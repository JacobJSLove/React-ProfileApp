import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import reducers from './../reducers';
import { middlewares } from './../createStore';


export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name); // eslint-disable-line
    return propsErr;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(reducers, initialState);
};