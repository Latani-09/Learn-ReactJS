import {createSlice} from '@reduxjs/toolkit';

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }
export const TodoSlice=createSlice({
    name:'todos',
    initialState:{
        todos:[
            {id:0,text:'Learn React',completed:true},
            {id:1,text:'Learn Redux',completed:false,color:'purple'},
            {id:2,text:'Pay bill',completed:false,color:'green'}
        ]},
    reducers:create=>({
        addTask:create.reducer((state,action)=>{
            state.todos.push({id:nextTodoId(state.todos),text:action.payload,completed:false})
        }),
        deleteTask:create.reducer((state,action)=>{
            state.todos.pop(action.payload)
        }),
    }),
    selectors:{
        getTodos:state=>state.todos
    }})
    export const {addTask,deleteTask}=TodoSlice.actions;
    export const {getTodos} = TodoSlice.selectors;

export default TodoSlice.reducer;