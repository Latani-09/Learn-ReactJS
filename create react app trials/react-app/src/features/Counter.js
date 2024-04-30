import { useDispatch, useSelector } from 'react-redux';
import { selectCount,increment } from './counterReducer';
import {row} from '../styles'
export function Counter(){
    const count=useSelector(selectCount);
    const dispatch=useDispatch();
    return (
        <>
        <div style={row}>
            Count:{count}
        </div>
        <div style={row}>
          <button onClick={()=>dispatch(increment())}>Increment</button>  
        </div>
        </>
    )
}