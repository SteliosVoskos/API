import { combineReducers } from 'redux';

import person from './person';
import employer from './employer';
import users from './users';

const rootReducer = combineReducers({
    person,
    employer,
    users
});

export default rootReducer;