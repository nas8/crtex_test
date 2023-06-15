import { configureStore } from '@reduxjs/toolkit';
import panelSlice from './panelSlice';

export const store = configureStore({
  reducer: {
    panelSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
