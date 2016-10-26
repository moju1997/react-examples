import { applyMiddleware, combineReducers, createStore } from 'redux';

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import todo from './reducers/TodoReducer';

const reducer = combineReducers({
  todo
});

const middleware = applyMiddleware(promise(), thunk, logger);

export default createStore(reducer, middleware);
