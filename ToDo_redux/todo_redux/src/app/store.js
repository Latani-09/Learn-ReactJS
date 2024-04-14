import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

let preloadedState

const persistedTodosString = global?.window?.localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}
const store=configureStore({reducer:rootReducer});
export default store;
