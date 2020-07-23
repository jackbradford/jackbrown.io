/**
 * @file social-buttons.js
 * This file provides buttons for social media links.
 *
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { social_button_config } from '../config/social-buttons';

export default class SocialButtons extends Component {

    render() {

        return (
            <React.Fragment>
            <nav>
            <div className="nav-container">
            {
                social_button_config.map(function(button, index) {
                    return (
                        <button className="social" key={index}>
                            <a href={button.link}>
                                <img src={button.image} alt={button.name} />
                            </a>
                        </button>
                    )
                })
            }
            </div>
            </nav>
            </React.Fragment>
        );
    }
}

