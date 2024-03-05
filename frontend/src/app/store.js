import { configureStore } from '@reduxjs/toolkit';
import waitListReducer from '../features/waitList/waitListSlice';



export const store = configureStore({
	reducer: {
		waitList: waitListReducer
	},
});
