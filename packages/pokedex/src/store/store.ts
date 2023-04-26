import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemonSlice";
import { createWrapper } from "next-redux-wrapper";
import pokemonNameSlice from "./pokemonDetailsSlice";

const store = configureStore({
  reducer: {
    [pokemonSlice.name]: pokemonSlice.reducer,
    [pokemonNameSlice.name]: pokemonNameSlice.reducer,
  },
  devTools: true,
});
const createStore = () => store;

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<
  ActionTypes extends Action,
  ReturnType = void
> = ThunkAction<ReturnType, AppState, unknown, ActionTypes>;
export const ReduxWrapper = createWrapper(createStore);
