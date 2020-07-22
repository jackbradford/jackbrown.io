/**
 * @file modal-actions.js
 * This file defines actions that affect modal boxes.
 *
 */
export const REGISTER_MODAL = 'REGISTER_MODAL';
export const DISMISS_MODAL = 'DISMISS_MODAL';

export const registerModal = (id, type) => {

    return {
        type: REGISTER_MODAL,
        payload: {
            modalType: type,
            id: id,
        }
    };
}

export const dismissModal = (id) => {

    return {
        type: DISMISS_MODAL,
        paylaod: {
            id: id
        }
    };
}

