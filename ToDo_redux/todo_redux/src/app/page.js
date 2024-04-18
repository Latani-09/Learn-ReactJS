import Image from "next/image";
import styles from "./page.module.css";
import store from './store';
console.log(store.getState().todos);
//get a function to unregister 
const unsubcribe=store.subscribe(()=>console.log('store after disopatch',store.getState().todos))

store.dispatch({ type: 'toDos/Add', payload: 'Learn about actions' })
store.dispatch({ type: 'toDos/Add', payload: 'Learn about reducers' })
store.dispatch({ type: 'toDos/Add', payload: 'Learn about stores' })
console.log('afterunsubscribe')
unsubcribe()
store.dispatch({ type: 'toDos/Add', payload: 'Try creating a store' })


export default function Home() {
  
  return (
    <>
    <Provider store={store}>
      
    </Provider>
    </>
  );
}
