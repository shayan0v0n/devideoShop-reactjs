export const blogReducer = (state = {blogData: []}, action) => {
    switch(action.type) {
        case 'BLOG_DATA_REQUEST':
            return { loading: true, error: false ,blogData: [] }
        case 'BLOG_DATA_ERROR':
            return { loading: false, error: true ,blogData: [] }
        case 'BLOG_DATA_RESPONSED':
            return { loading: false, error: false ,blogData: action.payload }
        default:
            return state
    }
}

export const singlePostReducer = (state = {postData: {}}, action) => {
    switch(action.type) {
        case 'SINGLE_POST_REQUEST':
            return { loading: true, error: false, singlePost: {} }
        case 'SINGLE_POST_ERROR':
            return { loading: false, error: true, singlePost: {} }
        case 'SINGLE_POST_RESPONSED':
            return { loading: false, error: false, singlePost: action.payload }
        default:
            return state
    }
}