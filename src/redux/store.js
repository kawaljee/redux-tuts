import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from "./reducer";
import { thunk } from 'redux-thunk';


const composeEnhancers = compose
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;