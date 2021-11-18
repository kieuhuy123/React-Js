import {combineReducers} from 'redux'
import counterReducer from './counterSlice'
import todoReducer from './todoSlice'

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
});

export default rootReducer;