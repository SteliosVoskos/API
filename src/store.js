import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import users from './data/users';
import comments from './data/comments';

const defaultState = {
   users, comments
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk, logger));

export default store;