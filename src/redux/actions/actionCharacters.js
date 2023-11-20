import { getCharacters } from "../features/charactersSlice";

export const getAllCharacters = () => (dispatch) => {
  try {
    fetch('https://rickandmortyapi.com/api/character')
     .then(res => res.json())
     .then(({results}) => dispatch(getCharacters(results)))
  } catch (error) {
    console.log({message:error.message})
  }
}