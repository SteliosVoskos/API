import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import person from './data/person';
import employer from './data/employer';
import users from './data/users';

const defaultState = {
    person, employer, users
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;