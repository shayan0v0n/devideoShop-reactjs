export const coursesReducer = (state = {courses: []}, action) => {
    switch(action.type) {
        case 'COURSES_DATA_REQUEST':
            return {loading: true, error: false, courses: []}
        case 'COURSES_DATA_ERROR':
            return {loading: false, error: true, courses: []}
        case 'COURSES_DATA_SUCCESS':
            return {loading: false, error: false, courses: action.payload}
        default: 
            return state
    }
}