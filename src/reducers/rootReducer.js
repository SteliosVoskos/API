import { combineReducers } from 'redux';

import person from './person';
import users from './users';

const rootReducer = combineReducers({
    person,
    users
});

export default rootReducer;