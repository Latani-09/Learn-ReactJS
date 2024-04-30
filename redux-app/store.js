import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './src/app/slices/index.js';

export const makeStore=()=>{
    return configureStore({
        reducer:{rootReducer}
    })
}