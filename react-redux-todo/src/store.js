import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import rootReducer from './rootReducer';

export const store = configureStore({
	reducer: {
		roots: rootReducer
	}
});