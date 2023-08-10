import { configureStore } from '@reduxjs/toolkit'
import { dogsReducer } from './reducers/dogs';

export const createStore = () => configureStore({
  reducer: {
    dogs: dogsReducer,
  }
});

type StoreType = ReturnType<typeof createStore>;

export type RootState = ReturnType<StoreType["getState"]>;