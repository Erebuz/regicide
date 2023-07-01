import {configureStore} from '@reduxjs/toolkit';
import stateReducer from './baseSlice';

export const store = configureStore({
  reducer: {
    base: stateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
