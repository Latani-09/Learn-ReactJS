import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './lib/store'
import { initializeCount } from './features/counterReducer'
import { useAppDispatch } from './lib/hook'
export default function StoreProvider({ children }) {
  const dispatch=useAppDispatch();
  const count=2;
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(initializeCount(count))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}