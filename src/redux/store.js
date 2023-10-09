import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import comicsReducer from './comicsSlice';

const store = configureStore({
  reducer: {
    comics: comicsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
