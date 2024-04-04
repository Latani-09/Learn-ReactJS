import { useEffect, useReducer ,useState} from "react";
function Reducer(state,action){
    switch (action.type){
        case 'addTask':
            return [...state,{id:action.id,title:action.title}]   //shallow cloning using spread operator .
    }
}
 function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </>
  )
}
function TaskList({task}){
    useEffect(()=>{
    console.log(task);  }, //side effects or with external environment
    []);
    console.log(task);
    return(<>
    <h1>Tasks</h1>
    <ul>
    {task.map(item => (<li key={item.id}>title:{item.title}</li>))}</ul></>)
}
let nextId=4;
const intialTask=[
    {id:1,title:'one'},{id:2,title:'two'},{id:3,title:'three'}
]
export default function Todo(){
    const [tasks,dispatch]=useReducer(Reducer,intialTask)
    const handleAddTask=(text)=>{
        dispatch({type:'addTask',id:nextId++,title:text})
       }
    console.log(tasks);
    return (<>
       <AddTask   onAddTask={handleAddTask}/>
       <TaskList task={tasks}/>
    </>);
}
