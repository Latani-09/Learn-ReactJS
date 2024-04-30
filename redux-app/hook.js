import { combineSlices } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { counterSlice } from './src/app/slices/CounterSlice'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes()
export const useAppSelector = useSelector.withTypes()
export const useAppStore = useStore.withTypes()