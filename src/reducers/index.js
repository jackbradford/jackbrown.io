/**
 *  @file reducers/index.js
 *  This file provides the combined reducer.
 *
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import header from './header-reducer.js';

export default combineReducers({
    header,
    routing: routerReducer,
});

