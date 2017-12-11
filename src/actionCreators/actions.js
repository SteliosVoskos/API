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

export function fetchCommentsPending() {
    return {
        type: 'FETCH_COMMENTS_PENDING'
    }
}

export function fetchCommentsSuccess(data) {
    return {
        type: 'FETCH_COMMENTS_SUCCESS',
        data
    }
}

export function fetchCommentsError(error) {
    return {
        type: 'FETCH_COMMENTS_SUCCESS',
        error
    }
}

export function noCommentsForUser() {
    return {
        type: 'NO_COMMENTS_FOR_USER'
    }
}

export function fetchCommentsForUser(url, id) {
    return (dispatch) => {
        dispatch(fetchCommentsPending());

        fetch(url+id)
        .then(response => response.json())
        .then(comments => {
            if (!comments.length) {
                dispatch(noCommentsForUser());
            }
            dispatch(fetchCommentsSuccess(comments))
        })
        .catch(error => dispatch(fetchCommentsError(error)))
    }
}