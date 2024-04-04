import {createSlice} from 'react'
export const conterSlice=createSlice({
    name:'count',
    reducers:{
        increment:state=>{
        state+=1
        },
        decrement:state=>{
            state-=1
            }
    }

    
})
export const selectCount=state=>state.count.value;
