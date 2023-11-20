import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name:'characters',
  initialState: {
    characters:[],
  },
  reducers:{
    getCharacters: (state,action) => {
      state.characters = action.payload
    },
    onClose: (state,action) => {
      const close = state.characters.filter((ch)=>ch.id !== action.payload)
      state.characters = close
    }
  }
})

export const {getCharacters,onClose} = charactersSlice.actions

export default charactersSlice.reducer