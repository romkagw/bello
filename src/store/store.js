import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { belloApi } from './api/belloApi';

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(belloApi.middleware)
});

export default store;
