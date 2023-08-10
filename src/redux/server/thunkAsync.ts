import type { Dispatch, Store } from "@reduxjs/toolkit";
import type { RootState } from "..";

export async function thunkAsync(
  store: Store,
  thunk: (dispatch: Dispatch, getState?: () => RootState) => Promise<any>
) {
  await thunk(store.dispatch, store.getState);
}
