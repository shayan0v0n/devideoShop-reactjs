import axios from 'axios'

export const blogAction = () => async (dispatch) => {
    try {
        dispatch({ type: 'BLOG_DATA_REQUEST' })
        const { data } = await axios.get('https://jsonplaceholder.ir/posts');
        dispatch({ type: 'BLOG_DATA_RESPONSED', payload: data })
    } catch (error) {
        dispatch({ type: 'BLOG_DATA_ERROR' })
    }
}

export const singlePostAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'SINGLE_POST_REQUEST' })
        const { data } = await axios.get(`https://jsonplaceholder.ir/posts/${id}`)
        dispatch({ type: 'SINGLE_POST_RESPONSED', payload: data })
    } catch (error) {
        dispatch({ type: 'SINGLE_POST_ERROR' })
    }
}