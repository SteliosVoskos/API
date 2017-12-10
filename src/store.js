import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import users from './data/users';

const defaultState = {
   users
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;