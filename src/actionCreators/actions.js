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

export function fetchUsers(url) {
    return (dispatch) => {
        dispatch(fetchUsersPending());

        fetch(url)
        .then(response => response.json())
        .then(users => dispatch(fetchUsersSuccess(users)))
        .catch(error => dispatch(fetchUsersError(error)))
    }
}