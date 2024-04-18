const intialState={
    todos:[
        {id:0,text:'Learn React',completed:true},
        {id:1,text:'Learn Redux',completed:false,color:'purple'},
        {id:2,text:'Pay bill',completed:false,color:'green'}
    ]
}
function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }

export default function todoReducer(state=intialState,action){
    switch(action.type){
        case 'toDos/Add':
            return {...state, todos:[...state.todos,{id:nextTodoId(state.todos),text:action.payload,completed:false}]}

        default:
            return state;
    }

}