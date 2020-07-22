/**
 * @file contact.js
 * This file provides the Contact component.
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
            <section className="home">
                <h1>Jack Brown</h1>
            </section>
            </React.Fragment>
        );
    }
}

