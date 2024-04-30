
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/formReducer";
import counterReducer from "../features/counterReducer";
import {UseStore} from 'next-redux-wrapper';
import rootReducer from "../features/reducer";

export const makeStore = () => {
    return configureStore({
    reducer:{
        counter:counterReducer
    }
})}