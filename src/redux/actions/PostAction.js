export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'

const fetchPostRequest = () => ({
    type: FETCH_POST_REQUEST
})

const fetchPostSuccess = (posts) => ({
    type:FETCH_POST_SUCCESS,
    payload: posts
})

const fetchPostFailure = (error) =>({
    type: FETCH_POST_FAILURE,
    payload:error
})

export const fetchPost = () => {
    return async(dispatch) => {
        dispatch(fetchPostRequest());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            dispatch(fetchPostSuccess(data))
        } catch(error) {
            dispatch(fetchPostFailure(error.message))
        }
    }
}
