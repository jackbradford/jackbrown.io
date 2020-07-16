/**
 * This file provides the container for the Root component.
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Root from '../component/root';

const mapStateToProps = function(state) {

    return {

    }
};

const mapDispatchToProps = function(dispatch) {

    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);


