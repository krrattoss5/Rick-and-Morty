import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name:'characters',
  initialState: {
    characters:[],
  },
  reducers:{
    getCharacters: (state,action) => {
      state.characters = action.payload
    }
  }
})

export const {getCharacters} = charactersSlice.actions

export default charactersSlice.reducer