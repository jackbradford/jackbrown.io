/**
 * @file root.js
 * This file provides the root component, which contains the router
 * logic.
 *
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { mainNavigation } from 'Config';

class Root extends Component {

  render() {
    return mainNavigation.map(rt => (
      <Route
        key={rt.path}
        component={rt.component}
        exact={rt.exact}
        path={rt.path}
      />
    ));
  }
}

export default Root;

