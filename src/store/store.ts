import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user.slice';

export const store = configureStore({
	reducer: {
		user: userSlice
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;