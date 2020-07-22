/**
 * @file header-reducer.js
 * This file is responsible for reducing actions into a new "header" state.
 * The state is affected by the actions listed.
 *
 */
import { combineReducers } from 'redux';
import {
    RESET_MENU_EXPAND,
    TOGGLE_MENU,
    TOGGLE_DARK_MODE,
} from '../actions/header-actions';

export default function header(

    state = {
        menuExpand: false,
        darkMode: false,
    },
    action
) {

    switch (action.type) {

        case RESET_MENU_EXPAND:
            return {
                ...state,
                menuExpand: false,
            };

        case TOGGLE_MENU:
            return {
                ...state,
                menuExpand: !state.menuExpand
            };

        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode
            };

        default:
            return state;
    }
}

