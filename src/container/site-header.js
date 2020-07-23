/**
 * @file container/site-header.js
 * This file provides the site header.
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../component/header';
import {
    resetMenuExpand,
    toggleMenu,
    toggleDarkMode,
} from '../actions/header-actions';

const mapStateToProps = function(state) {

    return {

        menuExpand: state.header.menuExpand,
        darkMode: state.header.darkMode,
    }
};

const mapDispatchToProps = function(dispatch) {

    return {

        resetMenuExpand: () => {
            dispatch(resetMenuExpand())
        },
        toggleMenu: () => {
            dispatch(toggleMenu())
        },
        toggleDarkMode: () => {
            dispatch(toggleDarkMode())
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);


