export function fetchUsersPending() {
    return {
        type: 'FETCH_USERS_PENDING'
    }
}

export function fetchUsersSuccess(data) {
    return {
        type: 'FETCH_USERS_SUCCESS',
        data
    }
}

export function fetchUsersError(error) {
    return {
        type: 'FETCH_USERS_ERROR',
        error
    }
}