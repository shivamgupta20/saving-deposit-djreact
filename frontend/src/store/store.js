import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import rootReducer from './reducers/reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState
);

export default store;