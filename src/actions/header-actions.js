/**
 * @file header-actions.js
 * This file defines actions that affect the site header.
 *
 */
export const RESET_MENU_EXPAND = 'RESET_MENU_EXPAND';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

export const resetMenuExpand = () => {

    return {
        type: RESET_MENU_EXPAND
    }
}

export const toggleMenu = () => {

    return {
        type: TOGGLE_MENU
    }
}

export const toggleDarkMode = () => {

    return {
        type: TOGGLE_DARK_MODE
    }
}

