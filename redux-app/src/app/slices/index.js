import { combineSlices } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

const  rootReducer=combineSlices(counterReducer);
export default rootReducer;
