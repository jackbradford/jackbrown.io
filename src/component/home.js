/**
 * @file home.js
 * This file provides the home component.
 *
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SocialButtons from './social-buttons';

export default class Home extends Component {

    render() {

        return (
            <React.Fragment>
            <section className="home-title">
                <div className="title-container">
                    <h1>Jack Brown</h1>
                    <h2>software developer</h2>
                    <SocialButtons />
                </div>
            </section>
            <section className="home-intro">

            </section>
            </React.Fragment>
        );
    }
}

