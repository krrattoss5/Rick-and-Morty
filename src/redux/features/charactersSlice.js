import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name:'characters',
  initialState: {
    characters:[],
    search:[]
  },
  reducers:{
    getCharacters: (state,action) => {
      state.characters = action.payload
    },
    onClose: (state,action) => {
      const close = state.characters.filter((ch)=>ch.id !== action.payload)
      state.characters = close
    },
    onSearch: (state,action) => {
      state.search = action.payload
    },
    clearSearch: (state,action) => {
      state.search = action.payload
    }
  }
})

export const {getCharacters,onClose,onSearch,clearSearch} = charactersSlice.actions

export default charactersSlice.reducer