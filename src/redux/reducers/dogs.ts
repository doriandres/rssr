import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DogsState {
  pic: string;
};

const windowInitialState = (global as any)?.__INITIAL_STATE__?.dogs as DogsState | undefined;

const initialState: DogsState = windowInitialState || { 
  pic: "" 
};

export const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    setPic: (state, action: PayloadAction<string>) => {
      state.pic += action.payload
    }
  }
});

export const dogsReducer = dogsSlice.reducer;

export const { setPic } = dogsSlice.actions;