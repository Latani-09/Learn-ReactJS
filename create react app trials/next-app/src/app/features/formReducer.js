
import { createSlice } from "@reduxjs/toolkit";

const initialState={
   value:'no dispatch made'
}
export const formSlice=createSlice({
    name:'form',
    initialState,
    reducers:{
        addPersonal:(state,action)=>{
            
            state.value=action.payload;
            
        },
        addSpouse:(state,action)=>{
            state.value=action.payload;
        },
        addChildren:(state,action)=>{
            state.value=action.payload;
        }
    }
})

export const  {addChildren,addPersonal,addSpouse}=formSlice.actions;
export const selectForm=(state)=>state.form.value;
export default formSlice.reducer;