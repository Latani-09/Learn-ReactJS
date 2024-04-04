import  { useSelector, useDispatch } from 'react-redux';
import { selectCount,increment,decrement } from './CounterSlice';
function Counter(){
const count = useSelector(selectCount);
const dispatch = useDispatch();
return<>
<button onClick={dispatch(increment())}>+</button>
<span >{count}</span>
<button onClick={dispatch(decrement())}>+</button>
</>
}
export default Counter; 