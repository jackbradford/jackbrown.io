/**
 * @file modal-box-reducer.js
 * This file is responsible for reducing actions into a new "header" state.
 * The state is affected by the actions listed.
 *
 */
import { combineReducers } from 'redux';
import {
    REGISTER_MODAL,
    DISMISS_MODAL,
} from '../actions/modal-actions';

export const defaultModalBox = {
    id: '',
    display: false,
    type: null,
}

export default function modalBoxes(

    state = {},
    action
) {

    switch (action.type) {

        case REGISTER_MODAL:
            var modalId = action.payload.modalId;
            var modalType = action.payload.modalType;
            return {
                ...state,
                [modalId]: {
                    id: modalId,
                    type: modalType,
                    display: true
                }
            };

        case DISMISS_MODAL:
            return {
                ...state,
                [modalId]: {
                    ...state[modalId],
                    display: false,
                }
            };

        default:
            return state;
    }
}

