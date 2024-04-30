'use client'
import { makeStore } from "./store";
import { Provider } from "react-redux";
import { useRef } from "react";
import { initializeCount } from "./src/app/slices/CounterSlice";
export default function StoreProvider({children,count}){
    const storeRef=useRef();
    if (!storeRef.current){
        storeRef.current=makeStore();
        storeRef.current.dispatch(initializeCount(count))

    }

    return  <Provider store={storeRef.current}>{children}</Provider>
}