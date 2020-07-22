/**
 * @file header.js
 * This file provides the site header, menu, etc.
 *
 */
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { withRouter } from 'react-router';
import { mainMenuNavItems } from '../config/main-nav-menu-items
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Header extends Component {

    componentDidMount() {

        this.props.resetMenuExpand();
    }

    constructor() {

        super();
    }

    goToHomepage() {

        this.props.history.push('/');
    }

    getNavClass() {

        return (this.props.menuExpand === true)
            ? "expanded"
            : "";
    }

    render() {

        var navClass = this.getNavClass.bind(this)();
        return (

            <React.Fragment>
            <header id="app-header">
                <nav id="main-menu" className={navClass}>
                    <ul className="menu-items">
                        {mainMenuNavItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={ item.link } className={ item.className }>
                                        <span></span>
                                        <span>{ item.itemText }</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            </React.Fragment>
        );
    }
}

export default withRouter(Header);

