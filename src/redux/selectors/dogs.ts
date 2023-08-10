import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./..";
import { DogsState } from "./../reducers/dogs";

const selectDogsSlice = (state: RootState) => state.dogs;

export const selectDogPic = createSelector(selectDogsSlice, (state: DogsState) => state.pic);
