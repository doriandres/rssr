import axios from "axios";
import type { Dispatch } from "@reduxjs/toolkit";
import type { RootState } from "./..";
import { setPic } from "./../reducers/dogs";
import { selectDogPic } from "./../selectors/dogs";

export const getDogPic = () => async (dispatch: Dispatch, getState: () => RootState) => {
  const pic = selectDogPic(getState());
  if (pic) return;
  
  const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  dispatch(setPic(response.data.message));
};
