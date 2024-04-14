import todoReducer from './TodoSlice';
import {combineReducers} from 'redux';
const rootReducer=combineReducers({
        todos:todoReducer
    })
export default rootReducer;