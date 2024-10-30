import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import todoReducer from './todoReducer'
import PostReducer from './PostReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
    posts: PostReducer
})

export default rootReducer;