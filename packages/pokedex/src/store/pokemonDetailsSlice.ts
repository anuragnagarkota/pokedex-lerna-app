import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { fetchPokemonById } from "utils";
import { AppState } from "./store";

interface InterfacePokemonDetails {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
}
const initialState = {
  name: "",
  height: 0,
  weight: 0,
  base_experience: 0,
};
export const fetchDetailsName = createAsyncThunk(
  "user/details",
  async (id: string = "") => {
    try {
      const obj: any = await fetchPokemonById(id);
      return obj;
    } catch (error_: unknown) {
      console.log(error_);
      throw new Error(error_ as string);
    }
  }
);

// Actual Slice
export const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(HYDRATE, (state: any, action: any) => {
      return {
        ...state,
        ...action.payload.pokemonDetails,
      };
    });
    builder.addCase(
      fetchDetailsName.fulfilled,
      (state: InterfacePokemonDetails, action: any) => {
        state.name = action.payload.name;
        state.height = action.payload.height;
        state.weight = action.payload.weight;
        state.base_experience = action.payload.base_experience;
      }
    );
  },
});

export const pokemonDetailsState = (state: AppState) => state.pokemonDetails;

export default pokemonDetailsSlice;
