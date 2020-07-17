/**
 * @file root.js
 * This file provides the root component, which contains the router
 * logic.
 *
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

export default class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <header>
                    <h1>Jack Brown</h1>
                    <h2>Software Developer</h2>
                </header>
                { this.props.children }
            </React.Fragment>
        );
    }
}

