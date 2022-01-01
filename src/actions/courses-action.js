import axios from 'axios';

export const coursesAction = () => async (dispatch) => {
    try {
        dispatch({type: 'COURSES_DATA_REQUEST'})
        const { data } = await axios.get('https://devideo-cd58f-default-rtdb.firebaseio.com/0.json');
        dispatch({ type: 'COURSES_DATA_SUCCESS', payload: data })
    } catch (error) {
        dispatch({type: 'COURSES_DATA_ERROR'})
    }
}