'use client'
import React, { useRef, useEffect } from "react";
import { increment, initializeCount } from "./slices/CounterSlice";
import { useAppSelector, useAppDispatch } from "../../hook";

export default function Counter() {
  const countValue = useAppSelector((state) => state.count?.value);
  const dispatch = useAppDispatch();
  const initialized = useRef(false);


    if (!initialized.current) {
      dispatch(initializeCount(5));
      initialized.current = true;
    }

  return (
    <>
      <h1>Counter</h1>
      <h6>{countValue}</h6>
      <input
        value={countValue}
        onChange={(e) => dispatch(increment(e.target.value))}
      />
    </>
  );
}
