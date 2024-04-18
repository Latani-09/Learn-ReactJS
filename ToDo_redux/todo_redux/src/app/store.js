import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {print1,print2,print3} from './enhancer';
import {logger} from 'redux-logger';

let preloadedState

const persistedTodosString = global?.window?.localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}
console.log(typeof(print1));
const middlewareEnhancer=applyMiddleware(print1,print2);
const store=configureStore({reducer:rootReducer,middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  thunk: {
    extraArgument: middlewareEnhancer,
  },
  serializableCheck: false,
})});
export default store;
