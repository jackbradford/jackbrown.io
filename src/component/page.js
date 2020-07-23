/**
 * @file page.js
 * This file provides the root component, which contains the router
 * logic.
 *
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SiteHeader from '../container/site-header';

export default class Page extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <SiteHeader />
                { this.props.children }
            </React.Fragment>
        );
    }
}

