

import { createSlice } from "@reduxjs/toolkit";
import {createAppSlice} from '../createAppSlice.js';

const initialState={
    value:0
};
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            debugger
        state.value+=1},
        decrement:(state)=>{
            state.value-=1},
        initializeCount:(state,payload)=>{
            state.value=payload;
        }
    }
})
export const {increment,decrement,initializeCount}=counterSlice.actions;
export const selectCount=(state)=>state.counter.value
export default counterSlice.reducer;