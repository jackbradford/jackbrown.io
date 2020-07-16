/**
 * @file root.js
 * This file provides the root component, which contains the router
 * logic.
 *
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from './pages/page';
import Home from './pages/home';
import Contact from '';

export default class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <Route
                    exact path='/'
                    render={(props) => <Page> <Home {...props} /> </Page>}
                />
                <Route
                    exact path='/contact'
                    render={(props) => <Page> <ContactUs {...props} /> </Page>}
                />
            </React.Fragment>
        );
    }
}

