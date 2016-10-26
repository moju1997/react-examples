import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from "react-router";

import TodoApp from './components/TodoApp';
import store from './store';

ReactDOM.render((
  <div>
    <Provider store={store} >
        <Router  history={browserHistory} >
          <Route path='/' component={TodoApp} />
        </Router>
    </Provider>
  </div>
), document.getElementById('app'));
