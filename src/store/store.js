import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { blogReducer, singlePostReducer } from '../reducers/blog-reducer'
import { coursesReducer } from '../reducers/courses-reducer'

const initalState = {}

const reducers = combineReducers({
    blogData: blogReducer,
    singlePostBlog: singlePostReducer,
    courseDatas: coursesReducer
})

const middleware = [thunk]

const store = createStore(reducers, initalState, applyMiddleware(...middleware));
export default store