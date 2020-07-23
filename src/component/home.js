/**
 * @file home.js
 * This file provides the home component.
 *
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SocialButtons from './social-buttons';
import HomeHeader from '../container/home-header';

export default class Home extends Component {

    render() {

        return (
            <React.Fragment>
            <div className="home-page">
            <HomeHeader />
            <section className="home-title">
                <div className="title-container">
                    <h1>Jack Brown</h1>
                    <h2>software developer</h2>
                    <SocialButtons />
                </div>
            </section>
            <section className="home-intro">
                <div className="featured-skill">
                    <img src="/img/user-interface.svg" alt="A browser interface." />
                    <div className="intro-container">
                        <h2>Interfaces &amp; Integration</h2>
                        <p>
                            Back-end and front-end, web APIs and user experiences.
                            I design them to work together.
                        </p>
                    </div>
                </div>
                <div className="featured-skill">
                    <img src="/img/database.svg" alt="A database server." />
                    <div className="intro-container">
                        <h2>Database Development</h2>
                        <p>
                            I lay the burden of data integrity squarely on the
                            database layer. My schemas accuately describe the
                            systems they model.
                        </p>
                    </div>
                </div>
                <div className="featured-skill">
                    <img src="/img/intuition.svg" alt="An eye, with an idea." />
                    <div className="intro-container">
                        <h2>Intuition, Modern Tech</h2>
                        <p>
                            I integrate both into my strategies. I see possibilities and use
                            whatever tools are at hand to make the good ideas real.
                        </p>
                    </div>
                </div>
            </section>
            </div>
            </React.Fragment>
        );
    }
}

