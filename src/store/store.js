import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { blogReducer, singlePostReducer } from '../reducers/blog-reducer'
import { coursesReducer, detailCourseReduces } from '../reducers/courses-reducer'
import { authReducer } from '../reducers/auth-reducer'

const initalState = {}

const reducers = combineReducers({
    blogData: blogReducer,
    singlePostBlog: singlePostReducer,
    courseDatas: coursesReducer,
    detailCourseDatas: detailCourseReduces,
    isAuth: authReducer
})

const middleware = [thunk]

const store = createStore(reducers, initalState, applyMiddleware(...middleware));
export default store