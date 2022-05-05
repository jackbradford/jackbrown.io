import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import rootReducer from 'Reducers';
import Root from 'Components/root';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Root history={history}/>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('jackbrown-io'));

