import todoReducer from '../../../../react-redux-todo/src/TodoSlice';
import {combineReducers} from 'redux';
const rootReducer=combineReducers({
        todos:todoReducer
    })
export default rootReducer;