import * as commentsState from '../data/comments';
const comments = (state=commentsState, action) => {
    switch(action.type) {
        case 'FETCH_COMMENTS_PENDING':
            return {
                ...state,
                areCommentsPending: true
            }
        case 'FETCH_COMMENTS_SUCCESS':
            return {
                areCommentsPending: false,
                comments: action.data,
                areCommentsErroring: false
            }
        case 'FETCH_COMMENTS_ERROR':
            return {
                ...state,
                areCommentsErroring: true
            }
        case 'NO_COMMENTS_FOR_USER':
            return {
                ...state,
                isCommentsArrayEmpty: true
            }
        default:
            return state;
    }
}

export default comments;