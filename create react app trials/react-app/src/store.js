import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/formReducer";
import counterReducer from "./features/counterReducer";
export const store=configureStore({
    reducer:{
        form:formReducer,
        counter:counterReducer
    }
})
