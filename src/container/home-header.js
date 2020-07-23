/**
 * @file container/home-header.js
 * This file provides the header on the home page.
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

const getHeaderBar = function() {

    return (
        <div className="page-header home-header">
            <button className="main-menu-toggle primary-color">
                <img src="/img/main-menu-toggle.svg" alt="Click here to show the main menu." />
            </button>
        </div>
    );
}

const mapStateToProps = function(state) {

    return {

        menuExpand: state.header.menuExpand,
        darkMode: state.header.darkMode,
        getHeaderBar: getHeaderBar
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


