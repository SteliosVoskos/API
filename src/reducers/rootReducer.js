import { combineReducers } from 'redux';

import users from './users';
import comments from './comments';

const rootReducer = combineReducers({
    comments,
    users
});

export default rootReducer;