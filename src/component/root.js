/**
 * @file root.js
 * This file provides the root component, which contains the router
 * logic.
 *
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from './page';
import Home from './home';
import ContactUs from './contact';

export default class Root extends Component {

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

