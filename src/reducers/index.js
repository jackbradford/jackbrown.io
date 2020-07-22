/**
 *  @file reducers/index.js
 *  This file provides the combined reducer.
 *
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import header from './header-reducer.js';
import modalBoxes from './modal-box-reducer.js';

export default combineReducers({
    header,
    modalBoxes,
    routing: routerReducer,
});

