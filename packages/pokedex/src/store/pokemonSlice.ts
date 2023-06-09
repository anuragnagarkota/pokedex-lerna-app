import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { fetchPokemon } from "utils";
import { AppState } from "./store";

// Type
export type PokemonData = { name: string; url: string };

// Type for our state
export interface InterfacePokemonState {
  pokemonList: { [key: string]: PokemonData[] };
  pokemonCount: number;
  currentPage: number;
}

// Initial state
const initialState: InterfacePokemonState = {
  pokemonList: {
    page1: [],
  },
  pokemonCount: 0,
  currentPage: 1,
};

// Actual Slice
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList(state, action) {
      state.pokemonList[`page${action.payload.pageNumber}`] =
        action.payload.pokemonData;
    },
    setCount(state, action) {
      state.pokemonCount = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(HYDRATE, (state: any, action: any) => {
      if (state.currentPage > action.payload.pokemon.currentPage) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        ...action.payload.pokemon,
      };
    });
  },
});

export const { setCount, setPokemonList, setCurrentPage } =
  pokemonSlice.actions;

export const fetchPokemonData =
  (pageNumber: number) => async (dispatch: any, getState: () => AppState) => {
    try {
      if (
        !getState()?.pokemon?.pokemonList[`page${pageNumber}`] ||
        getState()?.pokemon?.pokemonList[`page${pageNumber}`]?.length === 0
      ) {
        const data = await fetchPokemon({
          page: (pageNumber - 1) * 20,
          limit: 20,
        });
        if (data) {
          dispatch(setPokemonList({ pageNumber, pokemonData: data?.results }));
          dispatch(setCount(data?.count));
          dispatch(setCurrentPage(pageNumber));
        }
      } else {
        dispatch(setCurrentPage(pageNumber));
      }
    } catch (err: any) {
      dispatch(setPokemonList([]));
      dispatch(setCount(0));
    }
  };

export const pokemonState = (state: AppState) => state.pokemon;

export default pokemonSlice;
