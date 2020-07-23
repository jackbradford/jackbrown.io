/**
 * @file page.js
 * This file provides the page component, which can be used to add features
 * available to all pages.
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
                { this.props.children }
            </React.Fragment>
        );
    }
}

