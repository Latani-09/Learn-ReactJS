// store/reducers.js
import { combineReducers } from 'redux';
import counterReducer from './features/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here if needed
});

export default rootReducer;
