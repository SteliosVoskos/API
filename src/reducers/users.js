import * as userState from '../data/users';

const users = (state=userState, action) => {
    switch(action.type) {
        case 'FETCH_USERS_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case 'FETCH_USERS_SUCCESS':
            return {
                isLoading: false,
                isError: false,
                users: action.data
            };
        case 'FETCH_USERS_ERROR':
            return {
                ...state,
                isError: true
            };
        default:
            return state;
    }
};

export default users;